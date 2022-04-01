/**
 * queue 队列 - 按顺序处理元素
 *
 * 先入先出
 * 入队和出队。入队会向队列追加一个新元素，而出队会删除第一个元素。
 *
 * BFS 常用 queue
 *
 * 前言 - js数组方法：
 * 添加元素到数组的末尾 .push()
 * 删除数组末尾的元素 .pop()
 * 删除数组头部元素 .shift()
 * 添加元素到数组的头部 .unshift()
 */
class Queue {
    constructor() {
        // store elements
        this.data = [];
        // a pointer to indicate the start position
        this.head = 0;
    }
    add(item){
        this.data.push(item);
    }
    delete(){
        if(this.isEmpty()){
            console.warn('Queue is empty.')
            return false;
        } else{
            this.head ++;
            return true;
        }
    }
    front(){
        return this.data[this.head];
    }
    isEmpty(){
        return this.head >= this.data.length;
    }
}

/**
 * 上面的实现很简单，但在某些情况下效率很低。随着起始指针的移动，浪费了越来越多的空间。
 * 更有效的方法是使用循环队列。我们可以使用固定大小的数组和两个指针来指示起始位置和结束位置。目的是重用我们之前提到的被浪费的存储。
 */
class CircularQueue{
    // 循环队列大小为k
    constructor(k) {
        this.data = new Array(k);
        this.head = -1;
        this.tail = -1;
    }
    enQueue(value) {
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
    deQueue() {
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
    Front() {
        if(this.isEmpty()) return -1;
        else return this.data[this.head];
    };
    Rear() {
        if(this.isEmpty()) return -1;
        else return this.data[this.tail];
    };
    isEmpty() {
        return this.head ===-1 && this.tail === -1;
    };
    isFull = function() {
        return (this.tail+1)%this.data.length === this.head;
    };
}

/** LeetCode定义的队列 https://github.com/datastructures-js/queue/blob/master/src/queue.js
 * @class
 */
class Queue3 {
    /**
     * Creates a queue.
     * @param {array} [elements]
     */
    constructor(elements) {
        this._elements = Array.isArray(elements) ? elements : [];
        this._offset = 0;
    }

    /**
     * Adds an element at the back of the queue.
     * @public
     * @param {any} element
     */
    enqueue(element) {
        this._elements.push(element);
        return this;
    }

    /**
     * Dequeues the front element in the queue.
     * @public
     * @returns {any}
     */
    dequeue() {
        if (this.size() === 0) return null;

        const first = this.front();
        this._offset += 1;

        if (this._offset * 2 < this._elements.length) return first;

        // only remove dequeued elements when reaching half size
        // to decrease latency of shifting elements.
        this._elements = this._elements.slice(this._offset);
        this._offset = 0;
        return first;
    }

    /**
     * Returns the front element of the queue.
     * @public
     * @returns {any}
     */
    front() {
        return this.size() > 0 ? this._elements[this._offset] : null;
    }

    /**
     * Returns the back element of the queue.
     * @public
     * @returns {any}
     */
    back() {
        return this.size() > 0 ? this._elements[this._elements.length - 1] : null;
    }

    /**
     * Returns the number of elements in the queue.
     * @public
     * @returns {number}
     */
    size() {
        return this._elements.length - this._offset;
    }

    /**
     * Checks if the queue is empty.
     * @public
     * @returns {boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Returns the remaining elements in the queue as an array.
     * @public
     * @returns {array}
     */
    toArray() {
        return this._elements.slice(this._offset);
    }

    /**
     * Clears the queue.
     * @public
     */
    clear() {
        this._elements = [];
        this._offset = 0;
    }

    /**
     * Creates a shallow copy of the queue.
     * @public
     * @return {Queue3}
     */
    clone() {
        return new Queue3(this._elements.slice(this._offset));
    }

    /**
     * Creates a queue from an existing array.
     * @public
     * @static
     * @param {array} elements
     * @return {Queue3}
     */
    static fromArray(elements) {
        return new Queue3(elements);
    }
}
