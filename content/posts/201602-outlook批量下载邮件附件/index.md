---
title: Outlook批量下载邮件附件
author: lizhimiao
type: posts
date: 2016-02-11T13:44:49+00:00
url: /2016/175/
categories:
  - Office
tags:
  - Outlook
  - VBA

---
因 需要经常处理大量电子邮件，下载附件进行处理，使用Outlook的宏可实现批量下载。 

## 1. Outlook中设置信任宏

因为安全的原因，Outlook是默认禁用宏的，在使用宏前，第一步就是要信任宏。  
在Outlook主界面点”文件”,点开”选项”,在”信任中心”，”信任中心设置”，”宏设置”中，选择”启用所有宏”。完全退出Outlook，再打开Outlook让设置生效。 <figure class="wp-block-image">

<img src="201602outlook_trust_center_enable_vba.jpg" alt="" class="wp-image-176" /><figcaption>启用Outlook中宏信任</figcaption></figure> 

## 2. 添加宏

将宏设置为可信任后，可在Outlook中添加实现该功能的宏代码: 

  1. 下载附件,并解压得到 _mAttachmentSaver.bas_ 

<div class="wp-block-file">
  <a href="multiAttachmentSave.zip">multiAttachmentSave.zip</a><a href="multiAttachmentSave.zip" class="wp-block-file__button" download>下载</a>
</div>

2. 在Outlook主界面按ALT + F11, 打开VBE编辑窗口。将 m_AttachmentSaver.bas_ 文件拉入VBE编辑窗口左上角项目浏览器中 。  
<figure class="wp-block-image">

<img src="201602install_vba_project.jpg" alt="" class="wp-image-178" /><figcaption>添加VBA项目</figcaption></figure> 

## 3. 添加快速访问栏按钮

安装完成宏代码后，为便于使用该功能，可在**快速访问栏**中添加运行宏的按钮。  
同样是在**文件**,**选项**窗口中设置 <figure class="wp-block-image">

<img src="201602add_a_button_to_qab.jpg" alt="" class="wp-image-179" /><figcaption>添加到Outlook快速访问栏</figcaption></figure> 

## 3. 具体使用

在Outlook邮件浏览界面按Ctrl或者按Shift选择多封邮件，点击在第二步添加的按钮，即会跳出文件夹窗口，选择需要保存附件的文件夹，所有选中邮件中的附件便批量保存至所选文件夹中了。

## 4. 问题和限制

  1. 该宏会保存邮件中所有附件，包括邮件正文中图片和底纹图案。
  2. 如在选择的文件夹中已包含同名文件，会将新下载文件名后添加时间标记，例如”FileA.txt”会被保存为”FileA_05201830669.txt”。  
    参考:&nbsp;<a href="http://gallery.technet.microsoft.com/office/Save-attachments-from-5b6bf54b" target="_blank" rel="noreferrer noopener">http://gallery.technet.microsoft.com/office/Save-attachments-from-5b6bf54b</a>