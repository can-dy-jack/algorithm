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

### 拓展学习

链表经典问题之约瑟夫问题

- [百度百科](https://baike.baidu.com/item/%E7%BA%A6%E7%91%9F%E5%A4%AB%E9%97%AE%E9%A2%98)
- [循环链表(约瑟夫环)的建立及C语言实现](http://c.biancheng.net/view/3346.html)


## 参考文章

- [百度百科](https://baike.baidu.com/item/%E9%93%BE%E8%A1%A8/9794473?fr=aladdin)
- 《数据结构与算法JavaScript描述》
- [为什么js中不封装链表结构？](https://www.zhihu.com/question/62128817)

有关链表练习题目可以去[leetcode](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2t7vj/)学习：

