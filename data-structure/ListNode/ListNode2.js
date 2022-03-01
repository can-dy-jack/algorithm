function Node2(val = 0,next = null,prev = null){
    this.val = val;
    this.next = next;
    this.prev = prev;
}
function ListNode2(){
    this.head = new Node2();
    this.size = 0;
}
/**
 * 在链表最后添加一个节点
 * @param {number|string} item
 * @return {Node} this.head
 */
ListNode2.prototype.push = function (item){
    let cur = this.head;
    while(cur.next !== null){
        cur = cur.next;
    }
    cur.next = new Node2(item,null,cur);
    this.size++;
}
/**
 * 找到位于index的节点的值
 * @param {number} index
 * @return {number}
 */
ListNode2.prototype.get = function (index){
    if(index<0 || index>=this.size){ return -1; }
    let cur = this.head.next;
    for(let i =0;i<index;i++){
        cur = cur.next;
        if(cur === null) return -1;
    }
    return cur.val;
}
/**
 * 删除值为 item(第一个值为item)  的节点
 * @param {number|string} item
 * @return {boolean} true if success
 */
ListNode2.prototype.remove = function (item){
    let prevNode = this.head.next;
    if(this.head.next === null) return false;
    while(prevNode.val !== item){
        prevNode = prevNode.next;
        if(prevNode === null) return false;
    }
    prevNode.prev.next = prevNode.next;
    prevNode.next.prev = prevNode.prev;
    this.size--;
    return true;
}
/**
 * 删除指定下标的节点
 * @param {number} index
 * @return {number} 被删除的那个节点的值
 */
ListNode2.prototype.removeAtIndex = function (index){
    // if(index >= this.size) return;
    let node = this.head.next;
    for (let i = 0;i<index;i++){
        node = node.next;
    }
    if(node.next === null){
        node.prev.next = null;
        this.size--;
        return node.val;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
        return node.val;
    }
}
/**
 * 打印链表内的所有节点的值
 * @return {Array}
 */
ListNode2.prototype.print = function (){
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
ListNode2.prototype.find = function (item){
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
ListNode2.prototype.insert = function (index, val){
    // if(index>= this.size) return false;
    const newNode = new Node2(val);
    let cur = this.head;
    for(let i = 0;i<index;i++){
        cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
    this.size ++;
}
ListNode2.prototype.toString = function (){
    let nodeNums = [],cur = this.head.next;
    while(cur !== null){
        nodeNums.push(cur.val);
        cur = cur.next;
    }
    return [nodeNums.join('->'),"node's value"];
}
// console.log(ListNode2.prototype);
