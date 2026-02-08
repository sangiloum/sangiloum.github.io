---
title: "Mac OS에서 기본 한글 입력기 + KeyRemap4MacBook 이용 한글 입력 설정법"
url: /2013/mac-os에서-기본-한글-입력기-keyremap4macbook-이용-한글-입력-설정법-2/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/2013/mac-os%ec%97%90%ec%84%9c-%ea%b8%b0%eb%b3%b8-%ed%95%9c%ea%b8%80-%ec%9e%85%eb%a0%a5%ea%b8%b0-keyremap4macbook-%ec%9d%b4%ec%9a%a9-%ed%95%9c%ea%b8%80-%ec%9e%85%eb%a0%a5-%ec%84%a4%ec%a0%95%eb%b2%95-2/
categories:
  - it
---
Mac OS X의 기본 한글입력기를 더욱 편리하게 사용하기 위해 [KeyRemap4MacBook](https://pqrs.org/osx/karabiner/ "KeyRemap4MacBook")을 이용하는데 아래 설정을 private.xml 파일에 넣어두면 편리합니다.  
기능

  - shift-space로 한영 전환이 된다. 단, 자체 한글 입력 기능이 있는 Aquamacs와 VirtualBox 같은 가상머신에서는 shift-space로 한영 전환을 하지 않는다.
  - 한글 모드에서 ctrl 키를 누르면 일시로 영문으로 전환되도록 해두어서 한글 모드에서도 ctrl-a 같은 단축키를 편리하게 사용할 수 있다.

<!-- end list -->
```
<?xml version="1.0"?>
<root>
 <item>
 <name>Shift-Space to Shift-Cmd-Space, not on Aquamacs or Virtualbox</name>
 <identifier>private.shift_space_toggle</identifier>
 <not>EMACS</not>
 <not>VIRTUALMACHINE</not>
 <autogen>--KeyToKey-- KeyCode::SPACE, VK_SHIFT,
 KeyCode::SPACE, ModifierFlag::OPTION_L | ModifierFlag::COMMAND_L</autogen>
 </item>
 <item>
 <name>Allow modifier keys in korean mode</name>
 <identifier>private.allow_modifier_key_in_korean</identifier>
 <inputmode_only>KOREAN</inputmode_only>
 <autogen>--KeyToKey-- KeyCode::CONTROL_L, KeyCode:: CONTROL_L,
 Option::KEYTOKEY_BEFORE_KEYDOWN, KeyCode::SPACE, ModifierFlag::OPTION_L | ModifierFlag::COMMAND_L,
 Option::KEYTOKEY_AFTER_KEYUP, KeyCode::SPACE, ModifierFlag::OPTION_L | ModifierFlag::COMMAND_L
 </autogen>
 </item>
</root>
```