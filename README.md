# sangiloum.github.io

## Project Overview
This repository contains the Jekyll source for <https://sangiloum.github.io>, including core content pages such as:
- `/`
- `/papers/`
- `/students/`
- `/talks/`

The repo is content-first: most maintenance work is editing Markdown collections and data files, not application code.

요약: 이 저장소는 홈페이지 원본이며, 운영의 핵심은 콘텐츠 파일(`_papers`, `_student_papers`, `_data/people.yml`)을 정확히 관리하는 것입니다.

## Local Development
### Prerequisites
- Ruby (same major version as CI is recommended)
- Bundler
- `vips` (required by `jekyll_picture_tag`)
- ImageMagick

On macOS (Homebrew):

```bash
brew install vips imagemagick
```

### Run locally

```bash
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000>.

### Build check

```bash
bundle exec jekyll build
```

요약: 로컬 확인은 `serve`, 배포 전 검증은 `build`를 기본으로 사용합니다.

## Repository Layout
- `_papers/`: papers shown on `/papers/`
- `_student_papers/`: papers listed in the student-paper section on `/students/`
- `_data/people.yml`: canonical person slug/name/url source
- `_includes/paper_item.html`: rendering logic for paper entries
- `_includes/student_paper_item.html`: rendering logic for student-paper entries
- `assets/css/style.css`: site-wide styling (including PDF link icon styling)
- `_posts/`: blog posts

요약: 논문/학생논문/인명 데이터는 각각 `_papers`, `_student_papers`, `_data/people.yml`가 단일 소스입니다.

## How to Add a New Paper
Create a new file in `_papers/` with this naming pattern:
- `_papers/YYYY-xxx-slug.md`

### Required front matter fields
- `title`
- `category`
- `year`
- `sort_key`

### Recommended fields
- `month`
- `doi`
- `arxiv`
- `url`
- `coauthors`
- `journal`
- `text`
- `note`

### Category-specific guidance
- `journal`
  - Put the venue name in `journal` (for example, `"European J. Combin."`)
  - Put volume/issue/pages in `text` (for example, `"**133**:104305"`)
- `conference`
  - Leave `journal` empty
  - Put proceedings/venue details in `text`
- `preprint`
  - Usually include `arxiv` and `url`
  - `text` may be empty

### `sort_key` rule
- Use `YYYYMM` when `month` is known
- Use `YYYY00` when month is unknown

### Coauthor slugs
- Every slug in `coauthors` must exist in `_data/people.yml`.

### Example (journal)
```yaml
---
title: "Example Title"
category: journal
year: 2026
month: 3
doi: "10.xxxx/xxxxx"
arxiv: "2601.12345"
url: "https://doi.org/10.xxxx/xxxxx"
coauthors:
  - dongyeap
sort_key: 202603
journal: "European J. Combin."
text: |
  **133**:104305
---
```

요약: 저널 논문은 `journal`과 `text`를 분리하고, `sort_key`를 `YYYYMM` 규칙으로 맞추면 렌더링이 안정적입니다.

## How to Add a New Person
Edit:
- `_data/people.yml`

### Fields
- Required:
  - `id`
  - `firstname`
  - `lastname`
- Optional:
  - `korname`
  - `url`

### `id` (slug) rules
- Use lowercase letters/numbers/hyphen when possible
- Must be unique (no duplicate IDs)
- Reused in:
  - `_papers` `coauthors`
  - `_student_papers` `authors`
  - `_student_papers` `mystudents`

### Display behavior
- If `url` exists, the name is rendered as a clickable link.
- If `korname` exists, it is rendered as superscript next to the name.

요약: 사람 정보는 `_data/people.yml`에서 먼저 정의하고, 다른 컬렉션에서는 반드시 그 `id`를 참조합니다.

## How to Add a New Student Paper
Create a new file in:
- `_student_papers/YYYY-xxx-slug.md`

### Required fields
- `title`
- `category`
- `year`
- `sort_key`
- `authors` (array)
- `mystudents` (array)

### Core constraints
- `authors` must be a non-empty array.
- `mystudents` must be a subset of `authors`.
- Every slug in `authors` and `mystudents` must exist in `_data/people.yml`.

### Category examples
- `journal`: include `journal` + `text` (+ optional `doi`, `arxiv`, `url`)
- `conference`: include `conference` + `text`

### Example (student journal paper)
```yaml
---
title: Example student paper
category: journal
year: 2025
sort_key: 202500
authors:
  - donggyu
  - jaehoon
mystudents:
  - donggyu
journal: J. Graph Theory
text: "**109**(4):446-453"
doi: 10.1000/example
---
```

### Relation to `students.md`
`students.md` renders from `site.student_papers` and auto-groups by category/subcategory/year.  
In most cases, adding a valid file to `_student_papers/` is enough; no manual list edit is needed for the student-paper lists.

요약: 학생 논문은 `_student_papers` 파일만 올바른 필드로 추가하면 `students.md` 목록에 자동 반영됩니다.

## Content Conventions
- Prefer local PDF links when available:
  - `/assets/pdf/<file>.pdf`
- Keep venue formatting consistent:
  - `journal` for venue name
  - `text` for volume/issue/pages or proceedings details
- Keep Markdown emphasis/link style consistent across entries.

요약: 링크는 로컬 우선, 서지 포맷은 `journal`/`text` 분리를 기본으로 유지합니다.

## Pre-Publish Checklist
1. Run:
   ```bash
   bundle exec jekyll build
   ```
2. Check `/papers/`:
   - venue formatting is correct
   - coauthor links resolve as expected
3. Check `/students/`:
   - category grouping is correct
   - `mystudents` authors are bolded correctly
4. Check PDF links:
   - open correctly
   - PDF icon appears next to PDF links in content

요약: 배포 전에는 `build` + `/papers/` + `/students/` + PDF 링크 표시를 반드시 확인합니다.
