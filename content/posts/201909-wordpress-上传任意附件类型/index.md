---
title: WordPress 上传任意附件类型
author: lizhimiao
type: posts
date: 2019-09-11T14:18:21+00:00
url: /2019/181/
categories:
  - 其他
tags:
  - WordPress

---
刚刚使用WordPress的编辑器时，发现WordPress无法上传zip附件，网上找了一下，发现两种方式。

  1. 修改wo-config.php
  2. 修改wp-includes/functions.php

两种方式各有好处和坏处。

## 修改wp-config.php

在wp-config.php中添加一行

```php
define( 'ALLOW_UNFILTERED_UPLOADS', true );
```

这样，WordPress完全不管你上传的文件类型，可能还是造成安全隐患，例如WordPress出现漏洞，黑客上传 WebShell 的php文件。

## 修改wp-includes/functions.php

根据Codex[^1]，我们可以在functions.php中添加类似如下代码

```php
<?php
add_filter( 'upload_mimes', 'mime_type_filter', 1, 1 );
function mime_type_filter( $mime_types ) {
  $mime_types['svg'] = 'image/svg+xml';     // 允许.svg 文件
  $mime_types['json'] = 'application/json'; // 允许 .json 文件
  
  unset( $mime_types['xls'] );  // 禁止.xls 文件
  unset( $mime_types['xlsx'] ); // 禁止 .xlsx 文件
  //需要在codex看一下，默认WordPress支持哪些类型，再考虑禁止。
  return $mime_types;
}
```

这样，我们可以控制我们需要的文件类型，取消不需要的文件类型。但是因为是修改了WordPress的文件，所以在下次WordPress更新时，这个配置可能会失效。

## 结论

两个方式各有优劣势，如果是个人小站点，不是特别担心安全问题，那么第一个方式更加省心，如果是企业网站，那么第二种方式，或者安装一个插件的方式来做其实是更好的选择。

[^1]: https://codex.wordpress.org/Plugin_API/Filter_Reference/upload_mimes