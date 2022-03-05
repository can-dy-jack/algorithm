---
title: Tag Plugins
date: 2021-11-12 22:40:00
tags: 
- 测试文件
- code
author: 陈科衡
categories: 测试文件
top: true
---

>标签插件（Tag Plugins）
>标签插件和 Front-matter 中的标签不同，它们是用于在文章中快速插入特定内容的插件。
>虽然你可以使用任何格式书写你的文章，但是标签插件永远可用，且语法也都是一致的。

[more](https://hexo.io/zh-cn/docs/tag-plugins)

<!--more-->

## 引用块

在文章中插入引言，可包含作者、来源和标题。

```ejs
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### 没有提供参数，则只输出普通的 blockquote

```ejs
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

### 引用书上的句子

```ejs
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

### 引用 Twitter

```ejs
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

### 引用网络上的文章

```ejs
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## 代码块

> 用法不同于markdown的代码块，但是hexo解析结果一致，所以样式一样。

语法：

```ejs
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

### 普通的代码块

```ejs
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

### 指定语言

```ejs
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

### 附加说明

```ejs
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

### 附加说明和网址

```ejs
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}

## Pull Quote

### 无class（默认样式）

```ejs
{% pullquote %}
文本内容
{% endpullquote %}
```

{% pullquote %}
文本内容
{% endpullquote %}

### 带有颜色

#### information

```ejs
{% pullquote information %}
文本内容
{% endpullquote %}
```

{% pullquote information %}
文本内容
{% endpullquote %}

#### danger

{% pullquote danger %}
文本内容
{% endpullquote %}

#### red

{% pullquote red %}
文本内容
{% endpullquote %}

#### blue

{% pullquote blue %}
文本内容
{% endpullquote %}

### 文字对中

```ejs
{% pullquote [class] center %}
文本内容
{% endpullquote %}
```

{% pullquote information center %}
文本内容
{% endpullquote %}

## iframe

```ejs
{% iframe url [width] [height] %}
```

## Image

> 在文章中插入指定大小的图片。

```ejs
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

{% img /img/avatar.png 120 120 '"title text" "alt text"' %}

## Link

在文章中插入链接，并自动给外部链接添加 target="_blank" 属性。

```ejs
{% link text url [external] [title] %}
```

{% link 我的博客 https://kartjim.top/dellicate %}

## 本主题内置

### tags note

> 主题内置的tag
> 参考了 [hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

```ejs
{% note [class] %}
note-info
{% endnote %}
```

{% note %}
默认样式
{% endnote %}
{% note info %}
info
{% endnote %}
{% note primary %}
primary
{% endnote %}
{% note success %}
success
{% endnote %}
{% note danger %}
danger
{% endnote %}
{% note warning %}
warning
{% endnote %}
{% note light %}
light
{% endnote %}

{% note cyan %}
cyan
{% endnote %}
{% note purple %}
purple
{% endnote %}

#### 内含列表

{% note %}

- 1
- 2
- 3
  - 31
    - 311
  - 32
  - 33

{% endnote %}
{% note danger %}
一个note tag内只能有一个列表
{% endnote %}

### color

> 设定文字颜色
> 文字颜色可以随便设置，颜色名称 | HEX | rgb() | rgba() | HSL() 等等均可。

{% note warning %}
需要注意的是，前面的颜色值和后面的文字中间不能有空格！
如果文字真的需要空格，那就使用多个color tag！
{% endnote %}

```ejs
{% color [color] [文字] %}
```

{% color blue 蓝色 %}

{% color rgb(128,128,64) rgb(128,64,64) %}

{% color #ff3346 HEX-#ff3346 %}

{% color hsl(300,100%,25%) hsl(300,100%,25%) %}

### alert

```ejs
{% alert [class] %}
A simple primary alert—check it out!
{% endalert %}
```

{% alert primary %}
A simple primary alert—check it out!
{% endalert %}
{% alert info %}
A simple info alert—check it out!
{% endalert %}
{% alert success %}
A simple success alert—check it out!
{% endalert %}
可选值：

- primary
- secondary
- success
- danger
- warning
- info
- light
- dark

### collapse

> bootstrap collapse

```ejs
{% collapse [class] [按钮文字] [id] %}
折叠内容
{% endcollapse %}
```

{% color red 三个参数均不可少！%}
|参数|注意事项|
|:---:|:---:|
|[class]|按钮的样式，选项为[boostrap的按钮样式](https://v4.bootcss.com/docs/components/buttons/)|
|[按钮文字]|按钮上面显示的文字|
|[id]|在同一篇文章里，每个collapse的id需要唯一，即每个collapse的id需要设定不同的值；值随意，不同就行。|
{% note danger %}
参数中如有空格，需要给参数加上引号！
{% endnote %}
例子：

```ejs
{% collapse info '点击显示折叠内容' id1 %}
这里写需要隐藏的文字。
{% endcollapse %}
```

{% collapse info '点击显示折叠内容' id1 %}
折叠内容并不支持太复杂的语法，列表、表格均不支持；但支持代码
{% endcollapse %}

more：

{% collapse success '点击显示折叠内容' id2 %}
折叠内容
{% endcollapse %}

{% collapse dark '点击显示折叠内容' id3 %}
折叠内容
{% endcollapse %}

### description

```markdown
{% description dark 提示 %}
本博客所有文章均采用 CC BY-SA 4.0 协议 ，转载请注明出处。
{% enddescription %}
```

{% description dark 提示 %}
本博客所有文章均采用 CC BY-SA 4.0 协议 ，转载请注明出处。
{% enddescription %}

{% description info 信息 %}
本博客所有文章均采用 CC BY-SA 4.0 协议 ，转载请注明出处。
{% enddescription %}
{% description success 提示 %}
本博客所有文章均采用 CC BY-SA 4.0 协议 ，转载请注明出处。
{% enddescription %}
{% description danger 危险 %}
本博客所有文章均采用 CC BY-SA 4.0 协议 ，转载请注明出处。
{% enddescription %}

- danger
- info
- success
- dark
