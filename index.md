---
title: "Sang-il Oum (엄상일)"
permalink: /
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/
featured_image: /assets/legacy/uploads/sites/2/2021/05/sangil-2021-crop.jpg
featured_image_original_url: https://dimag.ibs.re.kr/home/sangil/wp-content/uploads/sites/2/2021/05/sangil-2021-crop.jpg
featured_image_source: og_image
---

{% include home-logo.html
  variant="home-logo-wide"
  href="https://dimag.ibs.re.kr/"
  src="/assets/legacy/uploads/sites/2/2019/07/dimag-lg-1024x243.png"
  alt="IBS DIMAG"
%}

I am a **Distinguished Research Fellow<sup>수석연구위원</sup>** of the Institute for Basic Science (IBS) and have been the **CI** (Chief Investigator) of the [Discrete Mathematics Group<sup>이산수학그룹</sup>](https://dimag.ibs.re.kr/) at the [Institute for Basic Science<sup>기초과학연구원</sup>](https://www.ibs.re.kr/) since December 2018. The group was established in December 2018 and is based in [Daejeon](https://en.wikipedia.org/wiki/Daejeon), South Korea. I am also an Adjunct Professor<sup>겸직교수</sup> of the [Department of Mathematical Sciences, KAIST](https://mathsci.kaist.ac.kr/).

## News (Blog)

<div class="post-cards post-cards-compact home-post-cards">
{% for post in site.posts limit:3 %}
  <article class="post-card{% unless post.featured_image %} post-card--no-image{% endunless %}">
    {% if post.featured_image %}
    <a class="post-card-image-link" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}">
      <img class="post-card-image" src="{{ post.featured_image | relative_url }}" alt="{{ post.title | escape }}" loading="lazy" decoding="async">
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

## Mathematical Interests

Graph Theory, Matroid Theory, Combinatorics, Graph Algorithms, Structural Graph Theory, Parameterized Complexity, Width Parameters, etc.

## Educations

{% include home-logo.html
  variant="home-logo-compact"
  src="/assets/legacy/uploads/sites/2/2011/12/princeton.png"
  alt="Princeton University"
%}

  - May 2005, Ph.D. in [Applied and Computational Mathematics, *Princeton University*](https://www.pacm.princeton.edu).
      - Advisor: [Paul Seymour](https://web.math.princeton.edu/~pds/). Thesis: [Graphs of Bounded Rank-width](https://www.proquest.com/docview/305424265/abstract)
  - Nov 2003, M.A. in Applied and Computational Mathematics, *Princeton University*.
  - Feb 1998, B.S. in [Mathematics, *KAIST*](https://mathsci.kaist.ac.kr/).

## Academic Positions

{% include home-logo.html
  variant="home-logo-compact"
  src="/assets/legacy/uploads/sites/2/2014/12/kaistmath264.png"
  alt="Department of Mathematical Sciences, KAIST"
%}

  - Aug 2024 – : [Discrete Mathematics Group, *Institute for Basic Science (IBS)*](https://dimag.ibs.re.kr/), Daejeon, Korea.
      - Distinguished Research Fellow<sup>수석연구위원</sup>
  - Sep 2025 – : Adjunct Professor (겸직교수), [Department of Mathematical Sciences, *KAIST*](https://mathsci.kaist.ac.kr/).
  - Jan 2008 – July 2024: [Department of Mathematical Sciences, *KAIST*](https://mathsci.kaist.ac.kr/), Daejeon, Korea.
      - Assistant Professor (Jan 2008 – Feb 2011), Associate Professor (Mar 2011 – Aug 2016), Professor (Sep 2016 – July 2024), KAIST Endowed Chair Professor (Mar 2023 – July 2024)
  - Sep 2015 – Nov 2018: School of Mathematics, *[KIAS](https://www.kias.re.kr/)*, Seoul, Korea.
      - Affiliate Professor
  - Jan 2007 – Dec 2007: [Department of Combinatorics and Optimization, *University of Waterloo*](https://uwaterloo.ca/combinatorics-and-optimization/), Waterloo, ON, Canada.
      - Postdoctoral fellow
  - Aug 2005 – Dec 2006: [School of Mathematics, *Georgia Institute of Technology*](https://math.gatech.edu), Atlanta, GA, USA.
      - Visiting Assistant Professor

## Editorial Activities

  - [SIAM Journal on Computing](https://www.siam.org/publications/siam-journals/siam-journal-on-computing/)
  - [Graphs and Combinatorics](https://link.springer.com/journal/373)
  - [Electronic Journal of Combinatorics](https://www.combinatorics.org)
  - [Journal of the Korean Mathematical Society](https://jkms.kms.or.kr/content/about/aimsnscope.html)

## Discrete Math Seminar

I am organizing the [Discrete Math Seminar](https://dimag.ibs.re.kr/events/category/seminar/). I strongly encourage everyone, including students interested in discrete mathematics, to attend this seminar and **[subscribe to the mailing list](https://mailing.ibs.re.kr/mailman/listinfo/discretemath)**.

  - A [list of upcoming workshops, conferences, and schools](https://dimag.ibs.re.kr/home/sangil/meetings/).
  - A [list of online seminars](https://dimag.ibs.re.kr/home/sangil/online-seminars/).

## Selected List of Awards

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

[Jungho Ahn<sup>안정호</sup>](https://www.junghoahn.com), [Benjamin Bergougnoux](https://benjaminbergougnoux.github.io), [Robert Brignall](https://sites.google.com/view/debsoumya), [Hector Buffière](https://www.irif.fr/users/buffiere/index), [Rutger Campbell](https://dimag.ibs.re.kr/home/campbell/), [Debsoumya Chakraborti](https://sites.google.com/view/debsoumya), [Vera Chekan](https://www.informatik.hu-berlin.de/de/org/mitarbeiter/1694103), [Eun-Kyung Cho<sup>조은경</sup>](https://sites.google.com/view/ekcho), [Hojin Choi<sup>최호진</sup>](https://mathsci.kaist.ac.kr/~hojinchoi/), [Ilkyoo Choi <sup>최일규</sup>](https://sites.google.com/view/ilkyoochoi), [Suyoung Choi<sup>최수영</sup>](http://acmi.ajou.ac.kr/~schoi/), [Maria Chudnovsky](https://web.math.princeton.edu/~mchudnov/), [Linda Cook](https://dimag.ibs.re.kr/home/cook/), [Bruno Courcelle](https://www.labri.fr/perso/courcell/), [Konrad K. Dabrowski](https://www.konraddabrowski.co.uk), [James Davies](https://sites.google.com/view/davies-james/), [Matt DeVos](http://www.sfu.ca/~mdevos/), [Reinhard Diestel](https://www.math.uni-hamburg.de/home/diestel/), [François Dross](https://sites.google.com/view/francoisdross/home), [Katherine Edwards](https://www.linkedin.com/in/katherine-edwards-6a165043/), [Eduard Eiben](https://pure.royalholloway.ac.uk/portal/en/persons/eduard-eiben\(9ee8fd8f-cbc6-4365-bda4-79850f62e36d\).html), [Fedor V. Fomin](https://folk.uib.no/nmiff/), [Robert Ganian](https://www.ac.tuwien.ac.at/people/rganian/), [Tomáš Gavenčiak](https://gavento.cz), [Jim Geelen](http://www.math.uwaterloo.ca/~jfgeelen/), [J. Pascal Gollin](https://pascal-gollin.github.io), [Georg Gottlob](https://www.cs.ox.ac.uk/people/georg.gottlob/), Yangyan Gu, Qi Hao, [Meike Hatzel](https://meikehatzel.com), [Kevin Hendrey](https://sites.google.com/view/dongyeap-kang), [Robert Hickingbotham](https://www.roberthickingbotham.com/), [Illya V. Hicks](https://www.caam.rice.edu/~ivhicks/), [Petr Hliněný](https://www.muni.cz/lide?q=Petr.Hlineny), [Hao Huang](https://blog.nus.edu.sg/huanghao/), [Tony Huynh](https://sites.google.com/site/matroidintersection/), [Seonghyuk Im<sup>임성혁</sup>](https://seonghyukim.github.io), [Jisu Jeong<sup>정지수</sup>](https://mathsci.kaist.ac.kr/~jisujeong/), [Dong Yeap Kang<sup>강동엽</sup>](https://sites.google.com/view/dongyeap-kang), [Mihyun Kang<sup>강미현</sup>](https://www.math.tugraz.at/~kang/), [Mamadou Moustapha Kanté](https://perso.isima.fr/~makante/), [Ken-ichi Kawarabayashi<sup>河原林 健一</sup>](http://research.nii.ac.jp/~k_keniti/), [H. A. Kierstead](https://math.la.asu.edu/~halk/), [Donggyu Kim<sup>김동규</sup>](https://sites.google.com/view/dongyeap-kang), [Eunjung Kim<sup>김은정</sup>](https://ssimplexity.github.io), [Jaehoon Kim<sup>김재훈</sup>](https://sites.google.com/view/jaehoon-kim), [Jinha Kim<sup>김진하</sup>](https://sites.google.com/view/jinhakim), [Minki Kim<sup>김민기</sup>](https://sites.google.com/view/minkikim/home), [Ringi Kim<sup>김린기</sup>](https://sites.google.com/view/ringikim/home), [Sang-hyun Kim<sup>김상현</sup>](http://cayley.kr/), [Seog-Jin Kim<sup>김석진</sup>](https://sites.google.com/view/dongyeap-kang), Taegyun Kim<sup>김태균</sup>, [Younjin Kim<sup>김연진</sup>](https://sites.google.com/site/younjinkimsite/), [Andrew D. King](http://andrewdouglasking.com/), [Daniel Kráľ](http://www.ucw.cz/~kral/index.html.en), [Stephan Kreutzer](https://logic.las.tu-berlin.de/Members/Kreutzer/), [O-joung Kwon<sup>권오정</sup>](http://ojkwon.com), [Choongbum Lee<sup>이중범</sup>](https://web.archive.org/web/20190731183816/http://math.mit.edu:80/~cb_lee/), [Duksang Lee<sup>이덕상</sup>](https://dimag.ibs.re.kr/home/duksang/), [Joonkyung Lee<sup>이준경</sup>](https://sites.google.com/site/joonkyungleemaths/), [Sang June Lee<sup>이상준</sup>](https://www.cmor-faculty.rice.edu/~ivhicks/Site/professional.html), [Chun-Hung Liu](https://www.math.tamu.edu/~chliu/), [Mikiya Masuda](https://researchmap.jp/read0020795/?lang=english), [Dillon Mayhew](https://homepages.ecs.vuw.ac.nz/~mayhew/), [Rose McCarty](https://mccarty.math.gatech.edu), [Patrice Ossona de Mendez](http://madezhi.free.fr), [Bojan Mohar](https://www.sfu.ca/~mohar/), [Matthias Mnich](https://www.mle.hamburg/authors/mnich/), [Huy-Tung Nguyen](https://web.math.princeton.edu/~tunghn/), [Sergey Norin](https://www.math.mcgill.ca/snorin/), [Christophe Paul](https://www.lirmm.fr/~paul/), [Daniel Paulusma](https://danielpaulusma.github.io), [Michał Pilipczuk](https://www.mimuw.edu.pl/~mp248287/), [Bruce Reed](https://www.math.sinica.edu.tw/members/ceb857fa-f0f7-438d-942d-f6d8bd0e6029?page_id=16), [Ignasi Sau](https://www.lirmm.fr/~sau/), [Sigve Hortemo Sæther](https://www.uib.no/en/persons/Sigve.Sether), [Detlef Seese](http://www.aifb.kit.edu/web/Detlef_Seese/en), [Vaidy Sivaraman](https://sites.google.com/view/vaidysivaraman), [Paul Seymour](https://web.math.princeton.edu/~pds/), [Raphael Steiner](https://as.inf.ethz.ch/people/members/rsteine/index.html), [Jane Tan](https://people.maths.ox.ac.uk/tanj/), [Dimitrios M. Thilikos](http://www.thilikos.info/), [Erik Jan van Leeuwen](https://www.erikjanvl.nl/), Dominic van der Zypen, [Martin Vatshelle](http://www.ii.uib.no/~martinv/), [Maryam Verdian-Rizi](https://extendedstudies.ucsd.edu/about-extension/fatemah-maryam-verdian-rizi), Sounggun Wee<sup>위성군</sup>, [Sebastian Wiederrecht](https://www.wiederrecht.com), [Paul Wollan](http://wwwusers.di.uniroma1.it/~wollan/), [David R. Wood](https://users.monash.edu.au/~davidwo/), Ningyuan Yang, [Youngho Yoo<sup>유영호</sup>](https://sites.google.com/view/younghoyoo/), [Wei-Hsuan Yu](https://sites.google.com/view/weihsuanyu), [Xin Zhang](https://sites.google.com/view/zhangx/home), [Xuding Zhu](http://www.math.nsysu.edu.tw/~zhu/)

[Mastodon](https://mathstodon.xyz/@sioum)

[Curriculum Vitae](/assets/legacy/uploads/sites/2/2024/08/cv.pdf)
