---
title: Blog
permalink: /blog/
lead: News and announcements.
description: Blog posts by Sang-il Oum.
canonical_url: https://sangiloum.github.io/blog/
featured_image: /assets/legacy/2019/05/kang-oum-2.jpg
featured_image_source: og_image
---
<div class="blog-layout">
  {% include blog-categories.html active_category="" %}

  <section class="blog-main">
    <h2>Posts</h2>
    {% include post-cards.html posts=site.posts category_filter="" %}
  </section>
</div>

## Archive
### Yearly archives
{% assign yearly_groups = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for yearly in yearly_groups %}
- [{{ yearly.name }}]({{ '/' | append: yearly.name | append: '/' | relative_url }}) ({{ yearly.items | size }})
{% endfor %}

### Legacy
- [Legacy blog page](https://dimag.ibs.re.kr/home/sangil/blog/)
