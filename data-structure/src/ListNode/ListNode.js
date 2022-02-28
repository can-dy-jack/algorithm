// 单向链表
/*
 * Node类，用于表示节点
 *   val保存节点上的数据
 *   next保存指向下一个节点的链接
 */
function Node(val = 0, next = null) {
    this.val = val;
    this.next = next;
}
/*
 * LinkedList类，提供对链表进行操作的方法
 * head - 默认为0
 */
function ListNode(){
    this.head = new Node();
    this.size = 0;
}
/**
 * 在链表最后添加一个节点
 * @param {number|string} item
 * @return {Node} this.head
 */
ListNode.prototype.push = function (item){
    let cur = this.head;
    const newNode = new Node(item);
    while(cur.next !== null){
        cur = cur.next;
    }
    cur.next = newNode;
    this.size++;
    return this.head;
}
/**
 * 找到位于index的节点的值
 * @param {number} index
 * @return {number}
 */
ListNode.prototype.get = function (index){
    if(index<0 || index>=this.size){ return -1; }
    let cur = this.head;
    for(let i =0;i<=index;i++){
        cur = cur.next;
        if(cur === null) return -1;
    }
    return cur.val;
}
/**
 * 删除值为 item(第一个值为item)  的节点
 * @param {number|string} item
 * @return {boolean}
 */
ListNode.prototype.remove = function (item){
    let prevNode = this.head;
    if(this.head.next === null) return false;
    if(prevNode.next.val === item){
        prevNode.next = prevNode.next.next;
        this.size--;
        return true;
    }
    prevNode = prevNode.next;
    while(prevNode.next.val !== item){
        prevNode = prevNode.next;
        if(prevNode.next === null) return false;
    }
    prevNode.next = prevNode.next.next;
    this.size--;
    return true;
}
/**
 * 删除指定下标的节点
 * @param {number} index
 * @return {number} 被删除的那个节点的值
 */
ListNode.prototype.removeAtIndex = function (index){
    let prev = this.head,t;
    for (let i = 0;i<index;i++){
        prev = prev.next;
    }
    t = prev.next.val;
    prev.next = prev.next.next;
    this.size--;
    return t;
}
/**
 * 打印链表内的所有节点的值
 * @return {Array}
 */
ListNode.prototype.print = function (){
    let nodeNums = [],cur = this.head.next;
    while(cur !== null){
        nodeNums.push(cur.val);
        cur = cur.next;
    }
    return nodeNums;
}
/**
 * 寻找链表中和某个值 (item) 相同的的第一个节点，如果找不到就返回null
 * @param {number|string} item
 * @return {Node}
 */
ListNode.prototype.find = function (item){
    let currNode = this.head.next;
    while(currNode.val !== item){
        if(currNode.next == null) return null;
        currNode = currNode.next;
    }
    return currNode;
}
/**
 * 在指定位置插入值为val的节点
 * @param {number} index
 * @param {number} val
 */
ListNode.prototype.insert = function (index, val){
    // if(index>= this.size) return false;
    const newNode = new Node(val);
    let cur = this.head;
    for(let i = 0;i<index;i++){
        cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
    this.size ++;
    return this.head;
}
ListNode.prototype.toString = function (){
    let nodeNums = [],cur = this.head.next;
    while(cur !== null){
        nodeNums.push(cur.val);
        cur = cur.next;
    }
    return [nodeNums.join('->'),"node's value"];
}
