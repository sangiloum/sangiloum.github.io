---
title: Blog
permalink: /blog/
lead: News and announcements.
description: Blog posts by Sang-il Oum.
canonical_url: https://sangiloum.github.io/blog/
featured_image: /assets/legacy/2019/05/kang-oum-2.jpg
featured_image_source: og_image
pagination:
  enabled: true
  per_page: 10
  permalink: /page/:num/
  title: ":title - :num"
---
<div class="blog-layout">
  {% include blog-categories.html active_category="" %}

  <section class="blog-main">
    <h2>Posts</h2>
    {% assign paged_posts = paginator.posts | default: site.posts %}
    {% include post-cards.html posts=paged_posts category_filter="" %}
    {% if paginator and paginator.total_pages > 1 %}
    <nav class="list-pagination" aria-label="Blog post pages">
      {% if paginator.previous_page %}
      <a class="list-pagination-link" href="{{ paginator.previous_page_path | relative_url }}">← Newer</a>
      {% else %}
      <span class="list-pagination-link is-disabled">← Newer</span>
      {% endif %}
      <span class="list-pagination-status">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
      {% if paginator.next_page %}
      <a class="list-pagination-link" href="{{ paginator.next_page_path | relative_url }}">Older →</a>
      {% else %}
      <span class="list-pagination-link is-disabled">Older →</span>
      {% endif %}
    </nav>
    {% endif %}
  </section>
</div>

<section class="blog-archive">
  <h2>Archive</h2>
  <h3>Yearly archives</h3>
  {% assign yearly_groups = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  <ul>
    {% for yearly in yearly_groups %}
    <li>
      <a href="{{ '/' | append: yearly.name | append: '/' | relative_url }}">{{ yearly.name }}</a>
      ({{ yearly.items | size }})
    </li>
    {% endfor %}
  </ul>
</section>
