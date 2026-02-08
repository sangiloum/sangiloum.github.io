# sangiloum.github.io

Personal website migrated to Jekyll with legacy URL compatibility for:
- `https://dimag.ibs.re.kr/home/sangil/`
- `https://sangiloum.github.io/`

## Local development

### Prerequisites
- Ruby (same major version as CI preferred)
- Bundler
- `vips` (required by `jekyll_picture_tag`)
- ImageMagick

On macOS (Homebrew):
```bash
brew install vips imagemagick
```

### Run
```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Image authoring
- Preferred inline image syntax:
  - `{% picture "assets/legacy/.../image.jpg" --alt description %}`
- Linked image example:
  - `<a href="https://example.com">{% picture "assets/legacy/.../image.jpg" --alt description %}</a>`
- Existing responsive presets are configured in `_data/picture.yml`.
- Bulk markdown conversion helper: `scripts/convert_markdown_images.rb`.

## Structure
- Core pages: `/`, `/about/`, `/cv/`, `/papers/`, `/contact/`
- Legacy-compatible routes: `/home/sangil/...`
- Route mapping and rollout docs: `migration/`
- Blog posts: `_posts/*.md`

## Writing a new blog post
1. Create `_posts/YYYY-MM-DD-slug.md`.
2. Add front matter including `title` and `permalink`.
3. Recommended permalink format: `/YYYY/slug/`.
