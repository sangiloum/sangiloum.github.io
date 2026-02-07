---
title: "Mac OS에서 기본 한글 입력기 + Karabiner-Elements 이용 한글 입력 설정법"
permalink: /2018/mac-os-korean-input/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/2018/mac-os-korean-input/
categories:
  - it
---
Mac OS X 10.13의 기본 한글입력기를 더 편리하게 사용하려고 [Karabiner-Elements](https://pqrs.org/osx/karabiner/)를 설치한 후 설정을 만들어 보았습니다. 원래 [Karabiner라는 프로그램을 사용하여 잘 쓰고 있었는데](https://dimag.ibs.re.kr/home/sangil/2013/mac-os%ec%97%90%ec%84%9c-%ea%b8%b0%eb%b3%b8-%ed%95%9c%ea%b8%80-%ec%9e%85%eb%a0%a5%ea%b8%b0-keyremap4macbook-%ec%9d%b4%ec%9a%a9-%ed%95%9c%ea%b8%80-%ec%9e%85%eb%a0%a5-%ec%84%a4%ec%a0%95%eb%b2%95-2/) Mac OS 버젼이 올라가면서 이 프로그램은 더 이상 지원되지 않았고 대체하는 새 프로그램인 Karabiner-Elements가 처음에는 기능이 약하여 쓸 수 없었는데 이제 원하는 것이 대충 되는 것 같습니다.

아래와 같이 설정하면 다음 기능을 사용할 수 있습니다.

기능

  - Shift-Space로 한영 전환. 단, 자체 한글 입력 기능이 있는 Aquamacs와 Vmware Fusion에서는 Shift-Space 한영 전환을 막는다. (수정하면 VirtualBox, Parallels 등 자체 한글입력기능이 있는 프로그램에서 Shift-Space가 먹지 않도록 할 수 있습니다.)
  - 한글 모드에서 Ctrl키를 누르면 일시적으로 영문으로 전환되도록 하여서 한글 모드에서도 Ctrl-A과 같은 단축기를 누를 수 있게 한다. (Mac OS에서는 기본 한글입력기에서 Ctrl-A를 누르면 Ctrl-ㅁ으로 인식하여 아무 일도 일어나지 않습니다.)
  - Aquamacs와 VMWare Fusion에서는 한글 모드에서 Shift-Space를 누르면 영문으로 전환해준다. 그 외에는 자체 한글입력기능이 동작하도록 아무 것도 하지 않는다. *2018년 8월에 추가된 기능입니다. 이렇게 하는 이유는 간혹 한글 모드에서 Aquamacs로 들어간 경우 영어로 다시 전환되지 않아서 불편했기 때문입니다.*

아래 설정에서는 한글 전환키가 Mac OS 기본인 Option-Ctrl-Space가 한글전환키라고 가정한 것입니다.

설치방법: 아래 내용을 \~/.config/karabiner/assets/complex\_modifications에 myfile.json이라는 식으로 json 확장자로 넣은 후 Karabiner-Elements 설정 화면에서 “Complex Modifications” 탭에서 Add rule을 눌러 세 가지 설정(Change shift space to shift+control+space, Make control key work in Korean mode, Make shift-space to make English mode in Aquamacs or VMWare)을 모두 선택하여 넣으면 됩니다.

수정 (2022년 2월 14일): ctrl 키 누를때 영어로 잠깐 바뀌었다가 오는 기능 부분에서 한글로 다시 전환되지 않는 문제가 있었는데 한줄 추가하여 문제를 해결하였습니다. 오랜만에 macOS Monterey 12.1 M1에서 써보는데, 잘 되네요.

수정 (2024년 3월 9일): **macOS Sonoma 14.4로 업그레이드 한 후 한글 전환기가 기존 Shift-Ctrl-Space에서 Ctrl-Option-Space로 변경되었습니다. 그에 따라 본문 내용과 설정 내용을 수정하였습니다.**

``` wp-block-preformatted
{ "title": "For Korean PC Keyboard (Sang-il)", "rules": [ { "description": "Change shift space to shift+control+space", "manipulators": [ { "from": { "key_code": "spacebar", "modifiers": { "mandatory": [ "shift" ] } }, "conditions": [ { "type": "frontmost_application_unless", "bundle_identifiers": [ "^org\\.gnu\\.Aquamacs$", "^com\\.vmware\\.fusion$" ] } ], "to": [ { "key_code": "spacebar", "modifiers": [ "right_control", "right_option" ] } ], "type": "basic" } ] },
{ "description": "Make shift-space to make English mode in Aquamacs or VMWare", "manipulators": [ { "from": { "key_code": "spacebar", "modifiers": { "mandatory": [ "shift" ] } }, "conditions": [ { "type": "frontmost_application_if", "bundle_identifiers": [ "^org\\.gnu\\.Aquamacs$", "^com\\.vmware\\.fusion$" ] }, { "type": "input_source_if", "input_sources": [ { "language": "^ko$", "input_source_id": "^com\\.apple\\.inputmethod\\.Korean\\.2SetKorean$" } ] } ],
 "to": [ { "select_input_source": { "language": "^en$" } } ], "type": "basic" } ]
},
 { "description": "Make control key work in Korean mode", "manipulators": [ { "from": { "key_code": "left_control", "modifiers": { "optional": ["any"] } }, "conditions": [ { "type": "input_source_if", "input_sources": [ { "language": "^ko$", "input_source_id": "^com\\.apple\\.inputmethod\\.Korean\\.2SetKorean$" } ] } ], "to": [ { "select_input_source": { "language": "^en$" } }, { "key_code":"left_control" } ], "to_after_key_up": [ { "select_input_source": { "language": "^ko$", "input_source_id": "^com\\.apple\\.inputmethod\\.Korean\\.2SetKorean$" } } ], "type": "basic" } ] } ]
}
```
