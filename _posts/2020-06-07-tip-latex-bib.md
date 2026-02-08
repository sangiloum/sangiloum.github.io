---
title: "소소한 정보: BibTeX으로 참고 문헌 모으기"
permalink: /2020/tip-latex-bib/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/2020/tip-latex-bib/
featured_image: /assets/legacy/2020/06/bibdesk.png
featured_image_source: og_image
categories:
  - academia
---
LaTeX으로 논문을 쓸때 참고문헌은 보통 BibTeX으로 처리합니다. 여러 논문의 서지 정보를 mybib.bib처럼 확장자가 .bib인 파일로 한 곳에 모아두면 논문마다 따로 참고문헌을 정리할 필요없이 \\cite 명령으로 인용만 해주면 참고문헌 부분이 자동으로 생성되어 편리합니다. 이 글은 [(쉽게 배울 수 있는) BibTeX을 쓰는 법](http://wiki.ktug.org/wiki/wiki.php/참고문헌)을 설명하려는 것은 아니고, 몇 가지 주의점만 정리해두려고 합니다.

## bib 파일에 넣을 서지 정보는 [구글 스칼라](https://scholar.google.com)나 [dblp](https://dblp.org)에서 받은 것을 쓰지 말자\!

구글 스칼라나 dblp에서 받는 bib 포맷 정보는 자동으로 생성되어 품질이 좋지 않습니다. 저는 항상 미국수학회 [MathSciNet](https://mathscinet.ams.org/)에서 받아서 씁니다. 유료 사이트이긴 하지만 대부분의 대학과 연구소에서는 구독료를 지불하고 있습니다. 구독하는 곳에서 미리 Remote Access라고 적힌 지구본 그림 아이콘을 눌러 “원격 접속 인증”을 웹브라우저에서 받아두면 집에 노트북이나 휴대폰을 가지고 가더라도 90일간은 접속이 되어 편리합니다.

MathSciNet에서 논문을 검색한 후 Select alternative format에서 BibTeX을 선택하면 아래처럼 내용이 나옵니다.

``` wp-block-preformatted
@article {MR2232389,
 AUTHOR = {Oum, Sang-il and Seymour, Paul},
 TITLE = {Approximating clique-width and branch-width},
 JOURNAL = {J. Combin. Theory Ser. B},
 FJOURNAL = {Journal of Combinatorial Theory. Series B},
 VOLUME = {96},
 YEAR = {2006},
 NUMBER = {4},
 PAGES = {514--528},
 ISSN = {0095-8956},
 MRCLASS = {05C70 (05B35 05C85 68Q25 68R10 68W25)},
 MRNUMBER = {2232389},
MRREVIEWER = {Dillon Mayhew},
 DOI = {10.1016/j.jctb.2005.10.006},
 URL = {https://doi.org/10.1016/j.jctb.2005.10.006},
}
```

이렇게 받은 것을 mybib.bib 파일에 붙여넣고, 첫 번째 줄에 있는 키 부분만 원하는 것으로 바꿉니다.

## 서지 정보의 키는 일정한 규칙으로 정하자.

키는 항상 일정한 규칙으로 정하고 한 번 정하면 바꾸지 않는 것이 좋습니다. 예를 들어 박사과정 중에 논문을 4편을 썼는데 모아서 박사논문 하나로 정리한다고 생각해봅시다. 논문마다 키가 달랐다면 나중에 통합할 때 키를 다시 합쳐야 해서 대폭 수정을 해야 합니다.

{% picture preserve-original "assets/legacy/2020/06/bibdesk.png" --alt BibDesk %}


예전에는 일일이 논문 키를 저자의 성 알파벳 첫 글자를 모은 것 + 연도로 손으로 설정하곤 하였는데, 지금은 bib파일을 [BibDesk](https://bibdesk.sourceforge.io)라는 프로그램으로 관리하고 있어서, BibDesk 설정으로 제가 원하는 방식으로 생성하게 해둡니다. BibDesk는 Mac OS에서 mactex으로 TeX을 설치하면 /Applications/TeX 안에 설치가 되어 있습니다.

## 논문은 여러 개라도 bib 파일은 하나로 모아두자

저의 경우 mybib.bib이라는 파일을 항상 하드디스크의 \~/my/bib에 저장해두고, 거의 대부분의 논문을 쓸때 같은 bib파일을 참고하도록 설정해서 씁니다. 이를 위해서 BIBINPUTS라는 환경변수에 bib파일이 저장된 디렉토리를 지정해 놓습니다. 따라서 논문을 어느 디렉토리에서 쓰던지 bib 파일은 하나만 쓰게 됩니다.

만일 arXiv에만 있던 논문이 출판이 되면 mybib.bib에서 같은 키에서 내용만 고쳐줍니다. 그러면 이 논문이 인용된 논문마다 새로 컴파일만 해주면 참고문헌이 정확하게 나오게 되겠지요. 같은 논문이 다른 키로 두 번 인용되는 사고를 막아줍니다.

물론 요즘은 여러 저자들과 함께 논문 작업을 [overleaf](https://overleaf.com/)나 git (주로 [bitbucket](https://bitbucket.org))으로 하다보니 수 천개의 논문 서지 정보가 적힌 파일 전체를 공유하기는 어렵습니다. 저는 mybib.bib에 있는 논문에서 사용될법한 논문만 모아서 git 프로젝트 안에 따로 저장하여 공유하고 씁니다.

한편 BibDesk 프로그램으로 bib 파일을 관리하면 논문 원문 파일도 함께 관리할 수 있게 해주어서 편리합니다. BibDesk 설정을 잘 보면 논문 원문 파일을 어떤 디렉토리에 어떻게 저장할 지 상세하게 설정할 수 있어서 편리합니다. 또한 BibDesk 프로그램을 실행할 때 처음에 어느 bib 파일을 열 것인지도 미리 설정할 수 있어서 저의 경우 \~/my/bib/mybib.bib을 열도록 미리 설정해 둡니다.
