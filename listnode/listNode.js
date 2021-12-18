/*
 * 链表
 */

// 1、单向链表
/*
 * Node类，用于表示节点
 *
 * element保存节点上的数据
 * next保存指向下一个节点的链接
 *
 * 参：
 * LeetCode上的定义：
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * val即value；
 */
function Node(val){
    this.val = val;
    this.next = null;
}

/*
 * LinkedList 类 提供对链表进行操作的方法
 */
function LinkedList(){
    this.head = new Node("head");
    this.find = NodeFind;
    this.insert = NodeInsert;
    this.remove = NodeRemove;
    this.display = NodeDisplay;
}
function NodeFind(item){
    var currNode = this.head;
    while(currNode.val !== item){
        currNode = currNode.next;
    }
    return currNode;
}
function NodeInsert(newElement,item){
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
    /* 第一种方法：
    从head开始，找到待删除的item的前一个node，
    把前一个node的next指向跳过item，
    直接指向item的下一个
    */
    var prevNode = this.head;
    while(prevNode.next.val !== item){
        prevNode = prevNode.next;
    }
    // 删除
    prevNode.next = prevNode.next.next;
    /*
    * 第二种方法：
    * 在不是最后一个节点的情况下，直接把item的值换成下一个node的值，然后把next指向也换成下一个node的指向
    * 如果是最后一个节点，则直接把前一个节点的node改成null即可（还是要获取item的前一个node）
    * */
}

// main() for test

var cities = new LinkedList();
cities.insert("a","head");
cities.insert("b","a");
cities.insert("c","b");
cities.insert("d","c");
cities.remove('d');

cities.display();



// 双向链表 - 增加 this.previous 连接前一个节点
function Node2(val){
    this.val = val;
    this.next = null;
    this.previous = null;
}
function LinkedList2(){
    this.head = new Node2("head");
    this.find = NodeFind2;
    this.reverseDisp = reverseDisp;
    this.insert = NodeInsert2;
    this.remove = NodeRemove2;
    this.display = NodeDisplay2;
}
function NodeFind2(item){
    var currNode = this.head;
    while(currNode.val !== item){
        currNode = currNode.next;
    }
    return currNode;
}
function NodeInsert2(newElement,item){
    var newNode = new Node2(newElement),
        current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
function NodeDisplay2(){
    var currNode = this.head;
    while(!(currNode.next === null)){
        console.log(currNode.next.val);
        currNode = currNode.next;
    }
}
function NodeRemove2(item){
    let currNode = this.find(item);
    if(currNode.next !== null){
        // 语句顺序很重要
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }else{
        currNode.previous.next = null;
        currNode.next = null;
        currNode.previous = null;
    }
}
// 反序显示
function reverseDisp(){
    // 查找最后的节点
    let node = this.head;
    while(node.next !== null){
        node = node.next;
    }

    while(node.previous !== null){
        console.log(node.val);
        node = node.previous;
    }
}
// main() for test
/*
var cities = new LinkedList2();
cities.insert("a","head");
cities.insert("b","a");
cities.insert("c","b");
cities.insert("d","c");

cities.remove('d');

cities.display();
cities.reverseDisp();
*/

/**
 * 循环链表 - 最后一个结点的指针域指向头结点，整个链表形成一个环。
 *
 * 只需要在构造函数中加入 this.head.next = this.head 即可
 * 因为在使用 this.insert 插入值的时候有`newNode.next = current.next`,能够保证最后一个节点的next指向head！
 *
 * 单循环链表
 * 双循环链表
 */



