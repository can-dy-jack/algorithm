---
title: php环境配置
---

本文首发在[个人博客](https://kartjim.top/delicate)；

## 搭建开发环境


解析和执行PHP脚本，需要安装PHP运行环境；
PHP既可以独立运行，也可以作为Apache的模块运行；本文主要介绍PHP为apache的模块运行。

<!--more-->

### Apache

#### 获取apache

去官网可获取apache的源码：[apache](https://httpd.apache.org/)，但没有提供编译后的apache。
我们可以从apache官网上找到第三方打包后的apache，比如说：[Apache Lounge](https://www.apachelounge.com/)：
![1.png](https://i.loli.net/2021/11/26/ryjfbPYU1l4SEmv.png)
这里我选择`httpd-2.4.51-win64-VS16.zip`下载。

下载好之后解压文件，准备好一个文件夹把解压得到的文件放里面。
我就存放在f盘下：`F:\PHP\LAMP\apache\Apache24`，其中目录结构如下图：
![f](https://i.loli.net/2021/11/26/MfbIwcVlma5o3Ng.png)
其中：

| 文件夹 | 作用 |
|:-----------:|:-----------:|
| bin | 存放Apache应用程序 |
| conf | 存放配置文件 |
| htdocs | 默认的网站根目录 |
| modules | 存放模块 |

#### 配置Apache

打开apache配置文件（conf文件夹下的httpd.conf）

> 在`httpd.conf`里，"#" 是注释符

（1）、配置Apache安装路径
把`Define SRVROOT "c:/apache24"`改为：（大概第37行）

```python
Define SRVROOT "F:/PHP/LAMP/apache/Apache24" # 后面填上你自己的apache路径！
```

（2）、配置服务器域名
搜索`ServerName`，找到`#ServerName www.example.com:80`
因为暂时没有域名，所以取消注释即可（{% color #ef0105 不取消注释之后会报错 %}）。

#### 安装apache

以管理员身份运行cmd，并切换到apache的bin目录之下，输入一下命令进行安装：

```bash
httpd -k install -n apacheName
```

`-n`之后是apache的名称，任意取。

如果需要卸载：

```bash
httpd -k uninstall -n apacheName
```

#### 启动apache

在安装好apache之后，去bin目录下找到程序`ApacheMonitor.exe`，双击即可启动。

> 这是会发现任务栏里会有图标；
> 可以单击管理程序的开始与停止。

启动之后，打开浏览器，输入`http://localhost/`即可看到apache已经成功启动。

上面提到过`htdocs`文件夹是默认的网站根目录，里面有一个`index.html`文件，上面你看到的页面就是这个文件。
现在你可以随意修改它，并且在浏览器查看效果！

![image.png](https://i.loli.net/2021/11/26/N5nAfeTLpOPd3iB.png)
{% note primary %}
你甚至可以在其它设备的浏览器 通过你的电脑的IP地址 查看效果！

### PHP

#### PHP的优势

- 开源免费
- 跨平台型
- 面向对象
- 支持多种数据库
- 快捷性


语法与使用方式十分接近 本博客框架使用的语言 ejs

> 尽管PHP的优势现在已经不太明显，但还是有必要学一下；
> 有利于理解后端的知识，并在学习的过程中掌握更多网络相关的知识，不只是PHP；

#### 获取PHP

你可以去[PHP官网](https://www.php.net/)找到最新版的PHP。

但是，在下载之前你需要特别注意apache支持的PHP版本；如果你下载最新版本的PHP，但是你使用的apache并不支持，就会报错。

还有，PHP官网会提供两种版本的PHP，一个是`'Thread Safe'（线程安全）`版本，一个是`'Non Thread Safe'（非线程安全）`版本；
如果你使用apache运行PHP，则必须下载`'Thread Safe'（线程安全）`版本！

#### 配置

解压下载好的PHP，放进准备好的文件夹，这里我放在f盘：`F:\PHP\LAMP\php7.3`;文件目录结构如下：
![image.png](https://i.loli.net/2021/11/26/gumVS3yGfpFZjX1.png)

|文件/目录|作用|
|:---:|:---:|
|ext/|拓展文件存放|
|php.exe|PHP程序|
|php7apache2_4.dll|用于apache的Dll模块|
|libssh2.dll|用于apache的Dll模块|

PHP配置文件是`php.ini`，但是默认是没有的，只有`php.ini-development`和`php.ini-production`两个示例配置文件。
从名字上来看，很容易理解这两个文件的作用，`php.ini-development`用于开发阶段，而`php.ini-production`用于生产阶段。

所以我们暂时使用`php.ini-development`，新建`php.ini`文件，将`php.ini-development`复制一份到`php.ini`。

> 注：在`php.ini`里，`;`是注释符。

修改以下：
（1）、搜索`extension_dir`找到`;extension_dir = "ext"`,修改为

```ini
extension_dir = "F:\PHP\LAMP\php7.3\ext" 
```
后面填写你的 php中的ext 所在目录

（2）、查找`date.timezone`,将`;date.timezone`,修改为：

```ini
date.timezone = UTC
```
后面填 `UTC`（世界时）、 `PRC` （中国时区）或 `Asia/Shanghai`（上海） 等时区。

#### 在Apache中引用PHP模块

回到apache配置文件，在大约186行，引入PHP模块；
在其中插入以下代码：

```conf
LoadModule php7_module "F:/PHP/LAMP/php7.3/php7apache2_4.dll"
<FilesMatch "\.php$">
    setHandler application/x-httpd-php
</FilesMatch>
PHPIniDir "F:/PHP/LAMP/php7.3"
LoadFile "F:/PHP/LAMP/php7.3/libssh2.dll"
```


注意需要将后面的路径换成你自己的！

之后查找`dir_module`,将

```conf
<IfModule dir_module>
    DirectoryIndex index.html
</IfModule>
```

改为：

```conf
<IfModule dir_module>
    DirectoryIndex index.html index.php
</IfModule>
```

即，把`index.php`当做第二默认文件。


点击apache图标，重新启动apache（Restart）。
![image.png](https://i.loli.net/2021/11/26/yELObGFx1twVn5S.png)
如果没有报错，即为配置成功！

#### 测试PHP模块

在`htdocs`目录下新建`index.php`，删去`index.html`；
打开`index.php`，写入：

```php
<?php
  echo 'Hello PHP!';
?>
```

打开浏览器，访问`http://localhost/`，即可看到运行成功：
![image.png](https://i.loli.net/2021/11/26/VDUcdplnmg3vJSN.png)

## bug解决

### the requested operation has failed

造成`the requested operation has failed`的原因有很多：

1. 你使用的apache版本并不支持你使用的PHP版本

简单来讲就是你使用的PHP版本不在 apache支持的PHP版本 

这个时候需要去百度你使用的apache版本支持哪个版本的PHP，然后重新安装PHP环境与配置。


例如，我使用的是Apache/2.4.51 (Win64) ，第一次下载的PHP是7.4版本的，报错。之后改用PHP7.3就成功运行。


2. 你下载的PHP不是'Thread Safe'（线程安全）版本
