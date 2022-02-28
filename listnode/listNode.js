/*
 * 链表
 */

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

//js链表解决 约瑟夫环
/**
 * 1、数组方法
 * 将 n个人围成一个圈，并且第 m 个人会被杀掉，计算一圈人中哪两个人会存活。
 *
 * @param len 人数
 * @param start  开始位置
 * @param interval 间隔
 * @return {string} 幸存者位置信息
 */
function JosephRing(len=40,start=1,interval=3){
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
    if(people.indexOf(1) === -1){
        return '无幸存者';
    }else{
        return "幸存者位置为："+(people.indexOf(1)+1);
    }
}
// let now1 = new Date();
// console.log(JosephRing(40,1,3));
// let now2 = new Date();
// console.log(now2-now1 + "ms");

/**
 * 2、链表方法 - 循环链表
 *
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
// let now3 = new Date();
// console.log(JosephRing2(40,1,3));
// let now4 = new Date();
// console.log(now4-now3 + "ms");

// more: https://leetcode-cn.com/leetbook/read/linked-list/x6ybqh/


/**
 * 链表经典题目之 反转链表
 */
var reverseList = function(head) {
    let re = null;
    while(head != null){
        let temp = head; // temp 保存 head 的前一个元素
        head = temp.next; // head向后走
        temp.next = re; // 将前面的节点（上个循环的结构）加到后面
        re = temp; // 保存这个循环的结果
    }
    return re;
};

