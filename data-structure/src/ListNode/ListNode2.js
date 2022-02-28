function Node2(val){
    this.val = val;
    this.next = null;
    this.previous = null;
}
function ListNode2(){
    this.head = new Node2("head");
    this.size = 0;
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
