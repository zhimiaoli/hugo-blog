---
title: 用Jellyfin来管理视频课程
date: 2020-08-28T16:59:15+08:00
tags: []
categories: []
type: ["note", "latest"]
visibility: ["public"]
body_classes: "notes latest"
colours:
    primary-bg: "3,100%,92%" # hsl(3,100%,92%)
    secondary-bg: "5,100%,89%" # hsl(5,100%,89%)
    text: "195,100%,20%" # hsl(195,100%,20%)
    linktext: "195,100%,25%" # hsl(195,100%,25%)
    darklinktext: "195,70%,14%" # hsl(195,70%,14%)
    brilliant: "196,100%,42%" # hsl(196,100%,42%)
    tab-two: "278,9%,83%" # hsl(278,9%,83%)
    tab-three: "205,35%,76%" # hsl(205,35%,76%)
    tab-four: "199,52%,67%" # hsl(199,52%,67%)
    tab-five: "197,62%,59%" # hsl(197,62%,59%)
    tab-six: "196,68%,51%" # hsl(196,68%,51%)
twitterurl: ""
mastodonurl: ""
instagramurl: ""
image: ""
imagealt: ""
description: ""
---


我开始使用Jellyfin来管理视频课程，群晖的Video Station支持不是特别好。Plex中看到的具体视频都是EP01而非文件名。导致几乎无法用。

之前是不是我配置的Video Station有问题呢？

Jellyfin是使用的.Net Core开发的，导致Docker image非常大，占用群晖内存也比较高。