---
title: "Sang-il Oum (엄상일)"
permalink: /
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/
featured_image: /assets/legacy/2021/05/sangil-2021-crop.jpg
featured_image_source: og_image
---

{% include home-logo.html
  variant="home-logo-wide"
  href="https://dimag.ibs.re.kr/"
  src="/assets/legacy/2019/07/dimag-lg-1024x243.png"
  alt="IBS DIMAG"
%}

I am a **Distinguished Research Fellow<sup>수석연구위원</sup>** of the Institute for Basic Science (IBS) and have been the **CI** (Chief Investigator) of the [Discrete Mathematics Group<sup>이산수학그룹</sup>](https://dimag.ibs.re.kr/) at the [Institute for Basic Science<sup>기초과학연구원</sup>](https://www.ibs.re.kr/) since December 2018. The group was established in December 2018 and is based in [Daejeon](https://en.wikipedia.org/wiki/Daejeon), South Korea. I am also an Adjunct Professor<sup>겸직교수</sup> of the [Department of Mathematical Sciences, KAIST](https://mathsci.kaist.ac.kr/).

## [News (Blog)]({{ '/blog/' | relative_url }})

<div class="post-cards post-cards-compact home-post-cards">
{% for post in site.posts limit:3 %}
  <article class="post-card{% unless post.featured_image %} post-card--no-image{% endunless %}">
    {% if post.featured_image %}
    <a class="post-card-image-link" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}">
      {% include responsive-picture.html
        src=post.featured_image
        alt=post.title
        sizes_profile="card"
        class="post-card-image"
      %}
    </a>
    {% endif %}
    <div class="post-card-body">
      <h3 class="post-card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% assign post_year = post.date | date: "%Y" %}
      <p class="post-card-date">
        {{ post.date | date: "%Y-%m-%d" }}
        ·
        <a href="{{ '/' | append: post_year | append: '/' | relative_url }}">{{ post_year }}</a>
      </p>
    </div>
  </article>
{% endfor %}
</div>

## [Recent Preprints]({{ '/papers/' | relative_url }})

{% assign recent_preprints = site.papers | where: "category", "preprint" | sort: "sort_key" | reverse %}
<ol class="paper-list home-paper-list">
{% for paper in recent_preprints limit:3 %}
  {% include paper_item.html paper=paper %}
{% endfor %}
</ol>

## Mathematical Interests

Graph Theory, Matroid Theory, Combinatorics, Graph Algorithms, Structural Graph Theory, Parameterized Complexity, Width Parameters, etc.

## Educations

{% include home-logo.html
  variant="home-logo-compact"
  src="/assets/legacy/2011/12/princeton.png"
  alt="Princeton University"
%}

  - May 2005, Ph.D. in [Applied and Computational Mathematics, *Princeton University*](https://www.pacm.princeton.edu).
      - Advisor: [Paul Seymour](https://web.math.princeton.edu/~pds/). Thesis: [Graphs of Bounded Rank-width](https://www.proquest.com/docview/305424265/abstract)
  - Nov 2003, M.A. in Applied and Computational Mathematics, *Princeton University*.
  - Feb 1998, B.S. in [Mathematics, *KAIST*](https://mathsci.kaist.ac.kr/).

## Academic Positions

  - Aug 2024 – : [Discrete Mathematics Group, *Institute for Basic Science (IBS)*](https://dimag.ibs.re.kr/), Daejeon, Korea.
      - Distinguished Research Fellow<sup>수석연구위원</sup>

{% include home-logo.html
  variant="home-logo-compact"
  src="/assets/legacy/2014/12/kaistmath264.png"
  alt="Department of Mathematical Sciences, KAIST"
%}

  - Sep 2025 – : Adjunct Professor (겸직교수), [Department of Mathematical Sciences, *KAIST*](https://mathsci.kaist.ac.kr/).
  - Jan 2008 – July 2024: [Department of Mathematical Sciences, *KAIST*](https://mathsci.kaist.ac.kr/), Daejeon, Korea.
      - Assistant Professor (Jan 2008 – Feb 2011), Associate Professor (Mar 2011 – Aug 2016), Professor (Sep 2016 – July 2024), KAIST Endowed Chair Professor (Mar 2023 – July 2024)
  - Sep 2015 – Nov 2018: School of Mathematics, *[KIAS](https://www.kias.re.kr/)*, Seoul, Korea.
      - Affiliate Professor
  - Jan 2007 – Dec 2007: [Department of Combinatorics and Optimization, *University of Waterloo*](https://uwaterloo.ca/combinatorics-and-optimization/), Waterloo, ON, Canada.
      - Postdoctoral fellow
  - Aug 2005 – Dec 2006: [School of Mathematics, *Georgia Institute of Technology*](https://math.gatech.edu), Atlanta, GA, USA.
      - Visiting Assistant Professor

## [Editorial Activities]({{ '/service/' | relative_url }})

  - [SIAM Journal on Computing](https://www.siam.org/publications/siam-journals/siam-journal-on-computing/)
  - [Graphs and Combinatorics](https://link.springer.com/journal/373)
  - [Electronic Journal of Combinatorics](https://www.combinatorics.org)
  - [Journal of the Korean Mathematical Society](https://jkms.kms.or.kr/content/about/aimsnscope.html)

## Discrete Math Seminar

I am organizing the [Discrete Math Seminar](https://dimag.ibs.re.kr/events/category/seminar/). I strongly encourage everyone, including students interested in discrete mathematics, to attend this seminar and **[subscribe to the mailing list](https://mailing.ibs.re.kr/mailman/listinfo/discretemath)**.

  - A [list of upcoming workshops, conferences, and schools](https://dimag.ibs.re.kr/home/sangil/meetings/).
  - A [list of online seminars](https://dimag.ibs.re.kr/home/sangil/online-seminars/).

## [Selected List of Awards]({{ '/awards/' | relative_url }})

  - [Choi Seok-Jeong Award of the Year<sup>올해의 최석정상</sup>](https://csj.kms.or.kr/content/about/prize_history.php), Minister of Science and ICT of Korea, 2022.
  - Young Scientist Award<sup>젊은과학자상</sup>, President of Korea. 2012.
  - [TJ Park Junior Faculty Fellowship<sup>청암과학펠로</sup>](http://www.postf.org/en/page/scien/scien_v.do), POSCO TJ Park Foundation, November 25, 2009.

## Contact

**Discrete Mathematics Group, Institute for Basic Science (IBS)**, 55 Expo-ro, Yuseong-gu Daejeon, 34126 South Korea

34126 대전광역시 유성구 엑스포로 55 **기초과학연구원 이산수학그룹**

  - Email: ibs.re.kr after sangil@
  - Tel: +82-42-878-9200
  - Office: Room B321, Theory Building (3rd floor)
  - [Travel Instruction to the IBS](https://travel.dimag.kr/)

## Coauthors

{% assign coauthor_ids_csv = '' %}
{% for paper in site.papers %}
  {% if paper.coauthors and paper.coauthors.size > 0 %}
    {% assign joined_ids = paper.coauthors | join: ',' %}
    {% if coauthor_ids_csv == '' %}
      {% assign coauthor_ids_csv = joined_ids %}
    {% else %}
      {% assign coauthor_ids_csv = coauthor_ids_csv | append: ',' | append: joined_ids %}
    {% endif %}
  {% endif %}
{% endfor %}
{% assign coauthor_ids = coauthor_ids_csv | split: ',' | uniq %}
{% assign coauthors_sorted = site.data.people | where_exp: "person", "coauthor_ids contains person.id" | sort: "firstname" | sort: "lastname" %}
<p class="coauthors-inline">{% for co in coauthors_sorted %}{% capture co_full_name %}{{ co.firstname }}{% if co.lastname != "" %} {{ co.lastname }}{% endif %}{% if co.korname %}<sup>{{ co.korname }}</sup>{% endif %}{% endcapture %}{% if co.url %}<a href="{{ co.url }}">{{ co_full_name | strip }}</a>{% else %}{{ co_full_name | strip }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>

[Mastodon](https://mathstodon.xyz/@sioum)

[Curriculum Vitae](/assets/legacy/2024/08/cv.pdf)
