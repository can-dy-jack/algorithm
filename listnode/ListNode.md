# 链表 - JavaScript版
## 前言
在很多编程语言中，数组需要预先给定一个长度，添加新的元素很难；而且添加、删除等操作也比较烦，需要循环操作。

JavaScript提供了`push()`和`splice()`等函数来解决这类问题。
注意：在js中数组是对象（Object）：
![数组](https://s2.loli.net/2021/12/18/vjgPXux5ISBZmJL.png)

**js没有内置链表**：因为 JavaScript 的数组长度是动态的，所以就没有了链表的必要，而且数组可以满足链表几乎所有的操作。而且现在各种对 JavaScript 的实现中，对数组的优化也是很完善的，数组的性能不一定比链表差。
而且需要随机访问元素时，还是数组更方便。

但是，链表作为一种十分基础的数据结构，还是需要学习一下的。这里只是借助js讲解链表的实现。

百度百科上面的解释：
> 链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。

如果没了解过链表，这应该很难理解。

首先，链表类型有：
- 单向链表
- 双向链表
- 循环链表

这里分开介绍，并使用js代码实现 链表。
（这里使用 `function ListNode(val){}` 的方式实现类，你也可以使用 `class`,可以参考其他文章；）

## 单向链表

单向链表由一系列结点组成，单向链表起始点会有一个特殊节点，叫做头节点；
除了头节点外的节点都包含一个值和下一个节点的引用（链）；
链表尾部指向为`null`；

![单向链表结构图](https://s2.loli.net/2021/12/18/QXyTmWuhnV6zPs8.png)

利用链表，添加和删除都比较容易：
![添加](https://s2.loli.net/2021/12/18/eTarWw3E2Up7udQ.png)

![删除](https://s2.loli.net/2021/12/18/8IGoPcxEhmMr9Ug.png)

### 代码实现
1. Node类，用于表示节点；


val保存节点上的数据  
next保存指向下一个节点的链接  
```javascript
function Node(val){
    this.val = val;
    this.next = null;
}
```

Node类即为单向链表的基本形式

2. LinkedList 类 提供对链表进行操作的方法
```javascript
function LinkedList(){
    this.head = new Node("head");
    this.find = NodeFind;
    this.insert = NodeInsert;
    this.remove = NodeRemove;
    this.display = NodeDisplay;
}
```
类中方法实现: 
```javascript
function NodeFind(item){ // 查找值为item的Node
    var currNode = this.head;
    while(currNode.val !== item){
        if(currNode.next == null) return 0; // 后续进行约瑟夫环的计算时要用
        currNode = currNode.next;
    }
    return currNode;
}
function NodeInsert(newElement,item){ // 插入数值
    var newNode = new Node(newElement),
        current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function NodeDisplay(){
    var currNode = this.head;
    while(!(currNode.next === null)){
        console.log(currNode.next.val);
        currNode = currNode.next;
    }
}
function NodeRemove(item){
    // 从head开始，找到前一个node
    var prevNode = this.head;
    while(prevNode.next.val !== item){
        prevNode = prevNode.next;
    }
    // 删除
    prevNode.next = prevNode.next.next;
}
```

使用`new LinkedList()`方法可以创建带有方法的Node链表。
`this.insert()`可以插入数值。

测试代码：
```javascript
var test = new LinkedList();
test.insert("a","head");
test.insert("b","a");
test.insert("c","b");
test.insert("d","c");
test.remove('d');

test.display();
```

## 双向链表 

单向链表并不能从最后的节点遍历到最前面的节点。

给单向链表中每个节点加上一个属性，指向前一个节点。

![image.png](https://s2.loli.net/2021/12/18/2Cy6lc8RfbLQMTz.png)

**增加 `this.previous` 连接前一个节点**

```javascript
function Node2(val){
    this.val = val;
    this.next = null;
    this.previous = null;
}
```

具体链表方法 读者可自己实现。

## 循环链表

最后一个结点的指针域指向头结点，整个链表形成一个环。  
只需要在构造函数中加入 `this.head.next = this.head` 即可

## 约瑟夫环 问题

> 传说在公元 1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的 40 个同胞被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，然后再数，直到杀光所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位置，站在那里得以幸存。请问哪两个位置？写一段程序将 n 个人围成一个圈，并且第 m 个人会被杀掉，计算一圈人中哪两个人会存活。

### 数组方法

```javascript
/**
 * @param len 人数
 * @param start  开始位置
 * @param interval 间隔
 * @return {string} 幸存者位置信息
 */
function JosephCircle(len=50,start=1,interval=3){
    if(len<start){
        return "error,length must bigger than start!";
    }
    let people = Array(len).fill(1); // 用1表示活着
    let position = start-1, // 数到的位置
        count = 0,n = len;
    while(n>1){
        count += people[position];
        if(count === interval){
            count = 0;
            people[position] = 0;
            n --;
        }
        if(position === len-1){
            position = 0;
        }else{
            ++position;
        }
    }
    return "幸存者位置为："+(people.indexOf(1)+1);
}
```
测试：
```javascript
console.log(JosephCircle(50,3));
```

### 链表方法

```javascript
/**
 * @param len 人数
 * @param start  开始位置
 * @param interval 间隔
 * @return {string} 幸存者位置信息
 */
function JosephRing2(len=40,start=1,interval=3){
    if(len<1 || start <1 || interval<2 || start>len){
        return "数据有误！";
    }
    let people = new LinkedList();
    people.insert(1,"head")
    for(let i = 2;i<=len;i++){
        people.insert(i,i-1);
    }
    let n = len,count = 0,i=start;
    while(n>1){
        count += people.find(i)? 1:0;
        if(count === interval){
            count = 0;
            people.remove(i);
            n -- ;
        }
        if(i === len){
            i = people.head.next.val;
        }else{
            i++;
        }
    }
    return "幸存者位置为："+people.head.next.val;
}
```

测试：
```javascript
console.log(JosephRing2(40,1,3));
```

### 两种方法时间效率比较

```javascript
// 数组
let now1 = new Date();
console.log(JosephRing(40,1,3));
let now2 = new Date();
console.log(now2-now1 + "ms");
// 链表
let now3 = new Date();
console.log(JosephRing2(40,1,3));
let now4 = new Date();
console.log(now4-now3 + "ms");
```

![image.png](https://s2.loli.net/2021/12/19/KA4x3BUQ9IvGpSb.png)

由此可见，链表的效率很高。

## 参考文章

- [百度百科](https://baike.baidu.com/item/%E9%93%BE%E8%A1%A8/9794473?fr=aladdin)
- 《数据结构与算法JavaScript描述》
- [为什么js中不封装链表结构？](https://www.zhihu.com/question/62128817)
- [算法 js 解决约瑟夫问题](https://www.jianshu.com/p/a4bb5180dd67)

有关链表练习题目可以去[leetcode](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2t7vj/)学习：

