/**
 * queue 队列 - 按顺序处理元素
 *
 * 先入先出
 * 入队和出队。入队会向队列追加一个新元素，而出队会删除第一个元素。
 *
 * 前言 - 数组方法：
 * 添加元素到数组的末尾 .push()
 * 删除数组末尾的元素 .pop()
 * 删除数组头部元素 .shift()
 * 添加元素到数组的头部 .unshift()
 */
class Queue{
    constructor(start = 0) {
        // store elements
        this.data = [];
        // a pointer to indicate the start position
        this.head = start;
    }
    /**
     * Insert an element into the queue.
     * Return true if the operation is successful.
     * enqueue()
     * */
    add(item){
        this.data.push(item);
        return true;
    }
    /**
     * Delete an element from the queue.
     * Return true if the operation is successful.
     * dequeue()
     * */
    delete(){
        if(!this.data.length){
            console.warn('Queue is empty.')
            return false;
        }else{
            this.head ++;
            return true;
        }
    }
    /**
     * Get the front item from the queue.
     * */
    front(){
        return this.data[this.head];
    }
    /**
     * Checks whether the queue is empty or not.
     * */
    isEmpty(){
        return this.head >= this.data.length;
    }
    // 输出队列中的元素，测试专用！
    display(){
        let len = this.head;
        while(len<this.data.length){
            console.log(this.data[len]);
            len++;
        }
    }
}
// check queue.
let q = new Queue();
q.add(5);q.add(3);
q.display();
console.log('-----------')
console.time('queueTime')
q.delete();
q.display();
console.timeEnd('queueTime')


/**
 * 上面的实现很简单，但在某些情况下效率很低。
 * 随着起始指针的移动，浪费了越来越多的空间。当我们有空间限制时，这将是难以接受的。
 *
 * 让我们考虑一种情况，即我们只能分配一个有最大长度的数组。但是我们不能接受更多的入队请求，因为现在队列已经满了。
 * 更有效的方法是使用循环队列。 具体来说，我们可以使用固定大小的数组和两个指针来指示起始位置和结束位置。 目的是重用我们之前提到的被浪费的存储。
 */
/**
 * 循环队列是一种线性数据结构，
 * 其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。
 * 它也被称为“环形缓冲器”。
 */
/**
 * @param {number} k
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 */
var MyCircularQueue = function(k) {
    this.data = new Array(k);
    this.head = -1;
    this.tail = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 * 入队
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isEmpty()){
        this.head++;this.tail++;
        this.data[0] = value;
        return true;
    }else if(this.isFull()){
        return false;
    }else{
        this.tail = (this.tail+1)%this.data.length;
        this.data[this.tail] = value;
        return true;
    }
};

/**
 * @return {boolean}
 * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false;
    }else if(this.head === this.tail){
        this.head = -1;this.tail = -1;
        return true;
    }else{
        // delete this.data[this.head];
        this.head = (this.head+1)%this.data.length;
        return true;
    }
};

/**
 * @return {number}
 * Front: 从队首获取元素。如果队列为空，返回 -1 。
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    else return this.data[this.head];
};

/**
 * @return {number}
 * Rear: 获取队尾元素。如果队列为空，返回 -1 。
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1;
    else return this.data[this.tail];
};

/**
 * @return {boolean}
 * isEmpty(): 检查循环队列是否为空。
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head ===-1 && this.tail === -1;
};

/**
 * @return {boolean}
 * isFull(): 检查循环队列是否已满。
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.tail+1)%this.data.length === this.head;
};
MyCircularQueue.prototype.display = function (){
    console.log(this.data);
}
// test code
let circularQueue = new MyCircularQueue(3); // 设置长度为 3
console.log(circularQueue.enQueue(1))// 返回 true
console.log(circularQueue.enQueue(2))// 返回 true
console.log(circularQueue.enQueue(3))// 返回 true
console.log(circularQueue.enQueue(4))// 返回 false，队列已满
console.log(circularQueue.Rear())  // 返回 3
console.log(circularQueue.isFull()) // 返回 true
console.log(circularQueue.deQueue())// 返回 true
console.log(circularQueue.enQueue(4)) // 返回 true
console.log(circularQueue.Rear())// 返回 4
