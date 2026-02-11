#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import urlopen
from zoneinfo import ZoneInfo

SOURCE_URL = "https://dimag.ibs.re.kr/events/category/seminar/dms/list/?ical=1"
OUTPUT_PATH = Path("data/upcoming_dms.yml")
DEFAULT_TZ = ZoneInfo("Asia/Seoul")
MAX_EVENTS = 3


def unescape_ical_text(value: str) -> str:
    return (
        value.replace("\\n", "\n")
        .replace("\\N", "\n")
        .replace("\\,", ",")
        .replace("\\;", ";")
        .replace("\\\\", "\\")
        .strip()
    )


def unfold_lines(raw_text: str) -> list[str]:
    lines: list[str] = []
    for line in raw_text.splitlines():
        if line.startswith((" ", "\t")) and lines:
            lines[-1] += line[1:]
        else:
            lines.append(line)
    return lines


def parse_dt(value: str, tz_name: str | None) -> datetime | None:
    try:
        tz = ZoneInfo(tz_name) if tz_name else DEFAULT_TZ
    except Exception:  # noqa: BLE001
        tz = DEFAULT_TZ
    try:
        if value.endswith("Z"):
            base = datetime.strptime(value, "%Y%m%dT%H%M%SZ")
            return base.replace(tzinfo=timezone.utc).astimezone(tz)
        for fmt in ("%Y%m%dT%H%M%S", "%Y%m%dT%H%M"):
            try:
                return datetime.strptime(value, fmt).replace(tzinfo=tz)
            except ValueError:
                continue
        return datetime.strptime(value, "%Y%m%d").replace(tzinfo=tz)
    except ValueError:
        return None


def split_summary(summary: str) -> tuple[str, str]:
    if r"\," in summary:
        left, right = summary.split(r"\,", 1)
        speaker = unescape_ical_text(left).strip()
        title = unescape_ical_text(right).strip()
        return speaker, title

    parts = re.split(r",", summary, maxsplit=1)
    if len(parts) == 2:
        speaker = unescape_ical_text(parts[0]).strip()
        title = unescape_ical_text(parts[1]).strip()
        return speaker, title
    text = unescape_ical_text(summary).strip()
    return "", text


def speaker_from_description(description: str) -> str:
    text = unescape_ical_text(description)
    if not text:
        return ""
    m = re.search(r"(?im)^\s*speakers?\s*:\s*(.+?)\s*$", text)
    if m:
        return m.group(1).strip()
    return ""


def parse_events(ics_text: str) -> list[dict[str, str]]:
    lines = unfold_lines(ics_text)
    events: list[dict[str, str]] = []
    current: dict[str, list[tuple[str, str]]] | None = None

    for line in lines:
        if line == "BEGIN:VEVENT":
            current = {}
            continue
        if line == "END:VEVENT":
            if current is not None:
                dtstart_entry = next(iter(current.get("DTSTART", [])), None)
                summary_entry = next(iter(current.get("SUMMARY", [])), ("", ""))
                description_entry = next(iter(current.get("DESCRIPTION", [])), ("", ""))
                url_entry = next(iter(current.get("URL", [])), ("", ""))

                if dtstart_entry:
                    key_with_params, dt_raw = dtstart_entry
                    tz_match = re.search(r"(?:^|;)TZID=([^;:]+)", key_with_params)
                    tz_name = tz_match.group(1) if tz_match else "Asia/Seoul"
                    dt = parse_dt(dt_raw, tz_name)
                    if dt is not None:
                        raw_summary = summary_entry[1]
                        speaker_from_summary, title = split_summary(raw_summary)
                        speaker = speaker_from_summary or speaker_from_description(description_entry[1])
                        if not speaker or speaker.strip().lower() == "tba":
                            speaker = "TBA"

                        url_value = unescape_ical_text(url_entry[1])
                        events.append(
                            {
                                "title": title or "TBA",
                                "start": dt.isoformat(),
                                "timezone": tz_name,
                                "speaker": speaker,
                                "url": url_value,
                            }
                        )
            current = None
            continue

        if current is None or ":" not in line:
            continue

        key_with_params, value = line.split(":", 1)
        key = key_with_params.split(";", 1)[0].upper()
        current.setdefault(key, []).append((key_with_params, value))

    return events


def build_dataset(ics_text: str) -> dict:
    now = datetime.now(DEFAULT_TZ)
    events = parse_events(ics_text)
    upcoming = [e for e in events if datetime.fromisoformat(e["start"]) >= now]
    upcoming.sort(key=lambda e: e["start"])

    return {
        "generated_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "source_url": SOURCE_URL,
        "events": upcoming[:MAX_EVENTS],
    }


def write_yaml(data: dict, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)

    def q(value: str) -> str:
        return json.dumps(value, ensure_ascii=False)

    lines = [
        f"generated_at: {q(data['generated_at'])}",
        f"source_url: {q(data['source_url'])}",
    ]
    if not data["events"]:
        lines.append("events: []")
    else:
        lines.append("events:")
        for event in data["events"]:
            lines.extend(
                [
                    f"  - title: {q(event['title'])}",
                    f"    start: {q(event['start'])}",
                    f"    timezone: {q(event['timezone'])}",
                    f"    speaker: {q(event['speaker'])}",
                    f"    url: {q(event['url'])}",
                ]
            )

    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def fallback_dataset() -> dict:
    return {
        "generated_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "source_url": SOURCE_URL,
        "events": [],
    }


def main() -> int:
    try:
        with urlopen(SOURCE_URL, timeout=30) as res:
            raw = res.read().decode("utf-8", errors="replace")
        data = build_dataset(raw)
    except Exception as err:  # noqa: BLE001
        if OUTPUT_PATH.exists():
            print(f"warning: fetch failed, keeping existing file: {err}", file=sys.stderr)
            return 0
        print(f"warning: fetch failed, writing empty fallback file: {err}", file=sys.stderr)
        data = fallback_dataset()

    write_yaml(data, OUTPUT_PATH)
    print(f"wrote {OUTPUT_PATH} with {len(data['events'])} upcoming events")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
