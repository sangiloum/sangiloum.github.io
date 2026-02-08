# sangiloum.github.io

Hugo source for <https://sangiloum.github.io>.

## Local development

### Prerequisites
- Hugo Extended

On macOS:

```bash
brew install hugo
```

### Run locally

```bash
hugo server
```

Open <http://127.0.0.1:1313>.

### Build

```bash
hugo --gc --minify
```

## Repository layout

- `hugo.toml`: Hugo configuration
- `content/`: pages and posts
- `content/papers-items/`: papers shown on `/papers/`
- `content/student-papers-items/`: student papers shown on `/students/`
- `data/people.yml`: canonical person slug/name/url source
- `data/*.yml`: students/postdocs datasets
- `layouts/`: Hugo templates and partials
- `static/`: static files copied as-is to site root
- `assets/`: Hugo-processed assets (if used)

## Content maintenance

### Add a paper

Create a new file in `content/papers-items/`:

- `YYYY-xxx-slug.md`

Required front matter:

- `title`
- `category`
- `year`
- `sort_key`

Recommended fields:

- `month`
- `doi`
- `arxiv`
- `url`
- `coauthors`
- `journal`
- `text`
- `note`

`sort_key` rule:

- `YYYYMM` when month is known
- `YYYY00` when month is unknown

### Add a person

Edit `data/people.yml`.

Required fields:

- `id`
- `firstname`
- `lastname`

Optional fields:

- `korname`
- `url`

## Pre-publish checklist

1. Run `hugo --gc --minify`.
2. Verify `/papers/` and `/students/` page rendering.
3. Verify category and year archive pages.
4. Verify featured images and math rendering pages.
