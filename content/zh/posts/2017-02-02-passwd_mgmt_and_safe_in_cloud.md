---
title: 密码管理与 Safe in Cloud
author: lizhimiao
type: post
date: 2017-02-02T14:51:19+00:00
url: /2017/19/
featured_image: https://lizhimiao.com/wp-content/uploads/2018/09/fig-23-09-2018_15-05-21.jpg
categories:
  - 杂谈
tags:
  - 效率

---
_太久没有更新博客，春节回来，尝试开始写一点点东西。_

昨天买了iOS和安卓平台的Safe in Cloud,所以把之前的密码内容整理一下。

## 密码策略

从HeartBleed漏洞，到后来CSDN密码泄露，到网易账户密码泄露，Yahoo用户信息泄露，Dropbox用户信息泄露。网络的各种密码泄露告诉我们，应该有一个良好的密码管理方案，养成良好的密码管理习惯，以下：

  1. 不同的网站使用不同的密码
  2. 不使用太简单的密码，如本人生日，123456，password或简单的英文单词，长度最好保证有8位以上，数字、字母和特殊符号组合。
  3. 使用两步验证<sup id="fnref-19-1"><a href="#fn-19-1" class="footnote-ref" role="doc-noteref">1</a></sup>
  4. 定期修改密码

## 密码管理软件

使用密码管理软件进行密码的生成、保存和自动填写，不用担心不同的网站因密码不同而忘记密码。

### LastPass

密码管理软件我最开始使用的是LastPass，所有的数据直接保存在云端，有几乎所有平台的客户端和各种浏览器的插件，也是够用的。高级账户使用订阅的方式，价格也可以接受。在淘宝上可以购买正规途径的高级账户的订阅。

<!--more-->


  
LastPass也是使用的网站登录的方式，之前也发生过数据库泄露的情况，所以目前已经弃用。

### 1Password

但是后来iOS和Mac使用较多之后，使用了1Password，1Password最初应该就是为Mac和iOS的设计的，对苹果支持较好。
  
1Password产品设计精良，目前也有iOS，Android（相对iOS客户端，Android客户端像个半成品）。

### Keepass

完全免费开源的软件，有官方和第三方的免费桌面客户端，无官方移动客户端，第三方移动客户端的质量难以保证，且一般为收费软件，多平台同步也是难以保证。

### Safe in Cloud

Safe in Cloud 是目前我正在使用的工具，移动端收费，桌面端免费，有Android，iOS，Mac，Windows平台客户端，支持使用常见网盘服务进行同步，我目前使用坚果云的WebDav进行同步<sup id="fnref-19-2"><a href="#fn-19-2" class="footnote-ref" role="doc-noteref">2</a></sup>。

**推荐Safe in Cloud.**

## 两步验证

两步验证能极大提高账号的安全，就算密码泄露了，对方也无法直接使用账号和密码登录。
  
推荐使用 Authy 这个密码管理工具，兼容 Google Authenticator 的方式。有主流移动平台的客户端，包括Chrome扩展的桌面端。
  
使用手机进行注册，无需密码，换了手机或者手机丢失后，使用发送到手机的验证码进行登录。
  
登录无密码但是有一个加密的密码，登录后同步到数据需要输入解密密码才能看到双重验证的密码。

_Update:_ : Safe in Cloud目前也自带有两步验证的功能，可以将目前两步的验证码都迁移到上面。

<div class="footnotes" role="doc-endnotes">
  <hr />
  
  <ol>
    <li id="fn-19-1" role="doc-endnote">
      或者叫做Two Factor Authenticator,aka 2FA,即需要有两件事物的认证，你知道的 (what you know) 和你拥有的实物 (what you have) ，保证泄露其中一样东西并不会导致密码泄露。常见的两步验证方式是使用谷歌的 Authenticator app。&#160;<a href="#fnref-19-1" class="footnote-backref" role="doc-backlink">&#8617;&#xFE0E;</a>
    </li>
    <li id="fn-19-2" role="doc-endnote">
      使用坚果云的WebDav进行同步：http://help.jianguoyun.com/?p=2622&#160;<a href="#fnref-19-2" class="footnote-backref" role="doc-backlink">&#8617;&#xFE0E;</a>
    </li>
  </ol>
</div>