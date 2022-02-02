# JavaScript技巧

## console的妙用
控制台竟然能打印表格！！！
### console.log

> 向控制台输出一条信息。

语法：
1. 可以打印一个或多个多个对象
```javascript
let info = {author:'jim', branch: 'main'};
let info2 = {author:'jim', branch: 'main'};
console.log(info,info2);
// console.log('info:',info);
```
![log2](https://s2.loli.net/2021/12/25/95bTV6GF7dNpJlD.png)

2. 使用字符串替换

**控制台输出可以自定义css样式**
```javascript
console.log("%cRed Text", "color: red");
console.log("%cRed Text", "text-shadow: 1px 1px blue;font-weight: bold;");
console.log("%cRed Text", "font-size: 24px;color:green;");
// console.log("%cRed Text", "font-size: 24px;color:#fff;background-color:blue;");
```
![log1](https://s2.loli.net/2021/12/25/NaMgvdPmxXyr9QD.png)

！_注意，这种方式并不支持所有的css样式_ ！

可以控制输出的格式，类似于 `python` 中的 `format` 
`console.log('String: %s, Int: %d,Float: %f, Object: %o', 'str', 2.1, 0.22, info)`

参数：
| Sub str  | 作用                                                                      |
|:--------:|:------------------------------------------------------------------------|
| %o or %O | 打印 JavaScript 对象。在审阅器点击对象名字可展开更多对象的信息。                                  |
| %d or %i | 打印整数。支持数字格式化。例如, console.log("Foo %.2d", 1.1) 会输出有先导 0 的两位有效数字: Foo 01。 |
|    %s    | 打印字符串。                                                                  |
|    %f    | 打印浮点数。支持格式化，比如 console.log("Foo %.2f", 1.1) 会输出两位小数: Foo 1.10           |
|    %c    | 打印带有css格式的文字                                                            |

3. 还支持变量占位符

```javascript
let temp = new Array(6).fill(1);
console.log(`temp的值为: ${temp}`);
```

### console.error 
> 向 Web 控制台输出一条错误消息。

`console.exception()` 是 `console.error()` 的别名,它们功能相同,但是`console.exception()`已经被弃用。

1. 基本使用：向控制台输出错误信息 `console.error('error')`  
![error](https://s2.loli.net/2021/12/25/BcVGO3MTW1biSaH.png)

2. 可以给多个参数，会拼接成一个字符串输出： `console.error('error','info2')`
3. 可以控制输出格式(`%c`标示要控制的字符串)  
   `console.error('%cError',"font-size: 24px;")`  
   ![error2](https://s2.loli.net/2021/12/25/RsWT6o3fygHnGAv.png)
4. 你甚至给多个字符串不同的样式：  
`console.error('%cError %cInformation',"font-size: 24px;","color:blue;") `  
   ![error3](https://s2.loli.net/2021/12/25/zvxa9WedjRUATq3.png)

5. `console.error()` 还可以用于输出JavaScript 对象列表，这些对象的字符串形式按顺序加起来然后输出。  
```javascript
let infoA = {author:'jim', branch: 'main'}
let infoB = {author:'jim2', branch: 'main2'}
let infoC = {author:'jim3', branch: 'main3'}
console.error(infoA,infoB,infoC)
```
![error4](https://s2.loli.net/2021/12/25/QSMK7jBgGyatqiv.png)

和 `console.log()` 一样，还可以使用字符串替换:
`console.error('String: %s, Int: %d,Float: %f, Object: %o', 'str', 2.1, 0.22, info)`

### 其它console方法

- console.warn()
  - 向控制台输出一个警告信息，`console.warn()` 很常用，使用方法和 `console.error` 一样。  
- console.assert()
  - 如果断言为false，则将一个错误消息写入控制台。如果断言是 true，没有任何反应。
  - 例子：`console.assert(false, 'your code has %s', 'error')`
- console.clear();
  - 清空控制台，并输出信息
  - 可以省略 `console` 直接 `clear()` 
- console.table()
  - 打印表格： `console.table(['jim','smith','angular'])`
![table](https://s2.loli.net/2021/12/25/m6TVGUYclhKaXMi.png)  
打印表格还可以多种花样，可以参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table)
- console.group()
  - 可以使用嵌套组来把视觉上相关的元素合并，以协助组织你的输出。
  - 使用console.group()创建新的嵌套块，或者用console.groupCollapsed() 创建默认折叠的块
  - 这种块需要点击闭合按钮来展开才能读到。
- **console.time()**
  - 定时器
  - 你可以使用定时器来计算一段特定操作的周期。
  - 使用 console.time() 方法以创建一个计时器，其唯一的参数表示了计时器的名字。
  - console.timeLog(),输出到现在为止经过的毫秒数;
  - 使用 console.timeEnd() 方法以关闭计时器，并获取经过的毫秒数，其同样以计时器的名字作为参数
  - 一个页面最多同时只能有 10,000 个计数器运行。
- console.trace()
  - 堆栈跟踪
  - 控制台也支持输出堆栈，其将会显示到调用 `console.trace()` 的点的调用路径。


## 小技巧

1. `...`可以平铺数组  
比如 `Math.min(nums)` 直接放入数组会出错，改为 `Math.min(...nums)` 即可。

2. 类型转换类  
- 任何类型转化为bool： `!!2`
- 数字转字符串： `2 + ''`
- 字符串转数字(前提是能转化为数字)：`+'2'`

3. 进制转化
- 10进制转化为16进制：`(255).toString(16)`
- 10进制转化为8进制：`(255).toString(8)`
- 16进制转化为10进制：`parseInt('FF',16)`
- 8进制转化为10进制：`parseInt('367',8)`

4. break之后可以加参数 - break 被标记的块语句  
[MDN-break](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break)

## 参考文档

- [MDN-Console/error](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/error)
- [MDN-Console](https://developer.mozilla.org/zh-CN/docs/Web/API/Console#outputting_text_to_the_console)
