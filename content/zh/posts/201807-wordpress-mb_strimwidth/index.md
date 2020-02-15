---
title: 'WordPress 提示Fatal error: Call to undefined function mb_strimwidth()'
author: lizhimiao
type: posts
date: 2018-07-17T02:19:42+00:00
url: /2018/109/
categories:
  - 杂谈
tags:
  - WordPress

---
今天在VPS上安装WordPress同样遇到了`Call to undefined function mb_strimwidth()`这个问题，百度一下发现是php没有启用mb_string这个扩展。

修改_php.ini_后，将`extension=php_mbstring.dll`, 前面的分号去掉后，重启php-fpm后还是不行。

后来再在网上找方式，说是自己定义一个类似功能的函数。

在国外网站找，说出可能是没有安装mb_string这个php扩展。

```bash
sudo apt-get install php-mbstring
```

解决。