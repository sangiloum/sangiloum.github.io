---
title: "그래프 이론 용어 우리말 번역"
permalink: /2015/%ea%b7%b8%eb%9e%98%ed%94%84-%ec%9d%b4%eb%a1%a0-%ec%9a%a9%ec%96%b4-%ec%9a%b0%eb%a6%ac%eb%a7%90-%eb%b2%88%ec%97%ad/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/2015/%ea%b7%b8%eb%9e%98%ed%94%84-%ec%9d%b4%eb%a1%a0-%ec%9a%a9%ec%96%b4-%ec%9a%b0%eb%a6%ac%eb%a7%90-%eb%b2%88%ec%97%ad/
featured_image: /assets/legacy/2015/02/content.jpeg
featured_image_source: og_image
categories:
  - essays
  - math
---
그래프 이론에서 널리 사용되는 용어들을 우리 말로 번역하는 적절한 표준이 아직 없습니다. 10여년 전에 성균관대 이상구 교수님께서 제작한 “[그래프이론 용어사전](http://matrix.skku.ac.kr/sglee/2003-1-NewFacTalk/2002-contents-Final/main/DISCRETE/glossary.html)” 웹사이트가 있습니다만, matching이나 k-connected같은 현대적이고 널리 (제) 연구에 쓰이는 그래프이론 용어가 나오지 않습니다. 오죽하면, 2000년에 고 이창우 교수님이 Introduction to Combinatorics라는 책을 쓰셨는데, 서문을 읽어보면 한국어 용어를 몰라 영어를 잘 못하는데도 불구하고 영어로 책을 쓰게 되었다고 적혀있습니다. (저도 어쩌다보니 보게 된 책일 뿐, 그래프이론 공부를 위해서는 딱히 추천하는 책은 아닙니다.)  

![한국어 용어가 없어서 영어로 써버린 어느 책.](/assets/legacy/2015/02/content.jpeg)

  
KAIST에서는 수업을 영어로 하니 우리 말로 그래프 이론 용어를 강의할 일이 거의 없습니다. 가끔 대중강연이나 고등학생 상대 강연, 그리고 연구비 신청서를 쓸 때 우리 말로 그래프 이론 용어를 쓰게 되는데 그때마다 불편합니다.  
[대한수학회 용어사전에서 matching을 ‘부합’으로 번역](https://www.kms.or.kr/mathdict/list.html?key=ename&keyword=matching)하였다며, [2014년 12월에는 위키피디아 한국어판에서 매칭이라는 용어를 모두 부합으로 바꿔버리는 황당한 일](https://ko.wikipedia.org/w/index.php?title=부합_\(그래프_이론\)&diff=prev&oldid=13243104)이 있었습니다. 가만히 있다가는 정말 엉뚱한 용어들이 등장할 것 같은 위기감에서 이 글을 씁니다.  
한편, 1990년대에만 해도 고등학교 교과과정에는 그래프이론이 전혀 등장하지 않았습니다. 하지만 2000년대 중반에 교과과정 개편을 통해 그래프이론이 살짝 나오는 것 같습니다. (하지만, 전공자인 제가 보기에는 고교에서 가르치는 주제의 선택이 그리 마음에 들지 않습니다. 고교 수준이라면 굳이 행렬의 n승과 인접행렬의 관계, ~~해밀턴 회로~~ 같은 것은 다루지 말고, 수학적 귀납법 가르칠 때 수학적 귀납법의 응용으로 홀의 결혼정리나 그래프 채색 문제를 소개하는 것이 왜 그래프가 유용한지 더 설명하고 수학적 사고를 키우는 교육으로 좋다고 생각합니다.)  
고등학교에서 그래프 이론을 배우지 않은 연구자들이 배우고 나온 학생들과 대화하기 위해서는 고교에서 사용되는 용법을 아는 것도 필요하리라 생각합니다. 이 글에서는 같은 단어에 대해 어떻게 사용되고 있는지, 어떤 것이 좋을지 시간날 때마다 정리해볼까 합니다. ?가 붙어있는 번역은 저도 확신이 서지 않는 것이며, 괄호안에 적힌 것들은 그렇게도 사용된다는 뜻입니다. 굵은 글씨는 제가 추천하는 번역입니다.  
의견 환영합니다. 제가 고교교과서를 가지고 있지 않으므로 고교교과과정에 나오는 용어가 다른 것이 있다면 제보도 부탁드립니다.

  - 기본 용어
      - graph: **그래프**
      - vertex: **꼭짓점** (꼭지점, 점)  
        고등학교 교과서에서 **꼭짓점**으로 표현하고 있습니다.
      - edge: **변** (선)  
        고등학교 교과서에서 **변**으로 표현하고 있습니다.
      - degree: **차수**~~ (고교 교과서에 나옵니다.)~~
      - complete graph: **완전그래프  
        **(어감으로는 완전 그래프보다는 꽉찬 그래프가 좋을 것 같긴 합니다.)
      - complete bipartite graph: **완전이분그래프**
      - complement graph: 뒤집은 그래프?
      - loop: **고리**? (루프)
      - line graph: 선그래프? 변그래프?
      - adjacency matrix: **인접행렬** (종속행렬)  
        ~~고교교과서에서 인접행렬이라고 부르고 있습니다.~~
      - incidence matrix: ?
      - hypergraph: 하이퍼그래프?
  - subgraph 관련
      - subgraph: **부분그래프**
      - induced subgraph: 유도된 부분그래프? (유도부분그래프?)
      - spanning subgraph: 생성부분그래프?  
        사실 왜 생성이라고 해야할지 알 수 없습니다.
      - minor: **마이너**
      - contraction: **축약**
      - deletion: **지우기**
      - topological minor: 위상적 마이너?
  - tree 관련
      - tree: **수형도** (나무, 트리)  
        ~~고교 교과서에 수형도로 나오는 것 같습니다.~~
      - spanning tree: **생성수형도**? (생성나무?)  
        어떤 분 박사논문에서 신장트리라는 표현을 본 적도 있습니다. [수학사랑의 사전](http://www.mathlove.kr/shop/mathlove/share/share_01_read.php?tm=1&menus=share1&no=1060&page=6)에서는 minimal spanning tree가 생성수형도라고 잘못 적혀있습니다. spanning tree는 모두 minimal하기 때문에 minimal이라는 단어는 그래프에서는 의미가 없고, 보통은 변에 어떤 값을 주었을 때 minimum spanning tree를 찾게 됩니다.
      - minimum spanning tree: **최소생성수형도**
      - forest: 숲?
      - leaf: 잎?
  - 연결성 관련
      - path: **경로**
      - trail: 트레일?  
        안타깝게도 고교교과서에서는 trail을 경로로 번역하고 있습니다.
      - cycle: **회로** (싸이클)
      - circuit: 닫힌 트레일?  
        ~~안타깝게도 고교교과서에서는 circuit을 회로로 번역하고 있습니다.~~
      - walk: 보행?
      - connected graph: **연결된 그래프** (연결그래프?)
      - 2-connected graph: **이중연결된 그래프 **
      - 3-connected graph: **삼중연결된 그래프**
      - k-connected graph: **k중연결된 그래프** (k-꼭짓점 연결 그래프)**  
        **k-연결된 그래프는 어떨까 하는 생각도 듭니다만, 이중연결된 그래프, 삼중연결된 그래프라고 표현하면 이연결, 삼연결 그래프보다 훨씬 이해가 쉽지 않을까 합니다.
      - 2-edge-connected graph: **변으로 2중 연결된 그래프**?
      - 3-edge-connected graph: **변으로 3중 연결된 그래프**?
      - k-edge-connected graph: **변으로 k중 연결된 그래프**? (k-변 연결 그래프)  
        이것의 번역은 고민됩니다.
      - (connected) component: **연결성분?** (연결부분?)
      - edge cut: 변 절단?
      - vertex cut: 꼭짓점 절단?
      - cut vertex: 절단 꼭짓점? (절단점?)
      - cycle space: **회로공간?**
      - bond: 결합?
      - bond space: 결합공간?
  - matching 관련
      - matching: **짝맞추기** (매핑, 짝지우기)  
        대한수학회 용어사전에서 부합이라고 번역해두어서 위키피디아에 부합이라고 하지만 아무도 그렇게 쓰는 사람을 본 적이 없습니다.
      - perfect matching: **완벽한 짝맞추기**
  - 색칠 관련
      - perfect graph: **완벽한 그래프**
      - bipartite graph: **이분그래프**
      - chromatic number: **채색수** (색칠수?, 착색수?)
      - edge-chromatic number, chromatic index: **변채색수**? (변착색수?)  
        *(어감이 별로 좋지 않네요. ㅠㅠ)*
      - list chromatic number: **목록 채색수**?
      - chromatic polynomial: **채색다항식**
      - k-degenerate graph: k-퇴화 그래프?
      - nowhere-zero k-flow: 전혀 0이 없는 k-플로우?
  - 평면그래프 관련
      - dual graph: **쌍대 그래프**?
      - planar graph: **평면 그래프**  
        plane graph와 planar graph의 정의가 다른데, 이 부분을 어떻게 처리할 지 고민입니다. 엄밀하게 하자면 plane graph를 평면그래프로, planar graph는 평면에 그릴 수 있는 그래프로 해야 맞겠지만, 여전히 만족스럽지 못합니다.
  - 분해 관련
      - ear decomposition: 귀 분해?
      - block decomposition: 블락 분해?
      - tree-decomposition: 수형도 분해?
      - path-decomposition: 경로 분해? 일자형 분해?
      - branch-decomposition: 가지 분해?
      - tree-width: ?
      - path-width: ?
      - branch-width: ?
      - clique-width?
      - tree-depth: ?
      - rank-width: ?
  - vertex-transitive graph: ?
