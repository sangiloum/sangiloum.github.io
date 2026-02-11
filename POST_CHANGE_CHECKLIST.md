# Post-change Checklist

Use this checklist after any website change before finalizing work.

## 1) Build succeeds

- Run:

```bash
hugo --gc --minify
```

- Pass condition: command exits successfully with no build errors.

## 2) Core pages render

- Verify generated files exist:
  - `public/index.html`
  - `public/papers/index.html`
  - `public/students/index.html`
  - `public/blog/index.html`

- Pass condition: all files exist and are non-empty.

## 3) Blog archives render

- Verify generated archive folders exist:
  - `public/blog/category/`

- Pass condition: both directories exist.

## 4) Math and image rendering sanity

- Check at least one math-heavy page (for instance, `/2017/mas575-spring-2017/` )and one image-heavy page in `public/` HTML output.
- Pass condition: math delimiters are rendered correctly in output and images are not broken.

## 5) Change-specific spot check

- If you touched:
  - `content/papers-items/` or `content/student-papers-items/`: verify corresponding list page updates.
  - `data/*.yml`: verify names/links render correctly where used.
  - `layouts/`, `assets/`, or `static/`: verify affected pages in local preview.

- In `index.html`, `papers/index.html`, and `students/index.html`, verify that the list of authors are presented with the oxford comma rule and the space between authors and commas are properly written.

- Pass condition: affected area behaves as intended, with no regressions observed.

## Reporting format for Codex

- In the final response, include:
  - each checklist item,
  - `PASS` or `FAIL`,
  - one short evidence line (command result or file/page checked).
