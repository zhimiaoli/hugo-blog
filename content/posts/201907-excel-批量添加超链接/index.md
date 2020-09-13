---
title: Excel 批量添加超链接
author: lizhimiao
type: posts
date: 2019-07-26T07:08:20+00:00
url: /2019/169/
categories:
  - Excel
tags:
  - VBA

---
批量添加超链接

```
Sub createHyperLinkForSeletion()
'
'将选中单元格创建超链接，链接到单元格内容中名称的表
'
For Each cell In Selection
    ActiveSheet.Hyperlinks.Add Anchor:=cell, Address:="", SubAddress:= _
        "'" & cell.Value & "'!A1", TextToDisplay:=cell.Value
Next cell
End Sub
```