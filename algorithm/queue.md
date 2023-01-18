---
title: queue
---

Queue implementation in JavaScript (based on Array)

> 队列：先入先出  
## install
```sh
npm i @kartjim/queue
```

## export
```js
const { Queue } = require('@kartjim/queue');
```

or ESM :
```js
import { Queue } from "@kartjim/queue";
```
## Queue API
```ts
export class Queue<A> {
    constructor(arr?: T[]);
    isEmpty(): boolean;
    size(): number;
    front(): A;
    end(): A;
    push(val: A): Queue<A>;
    pop(): A;
    toArray(): A[];
    clear(): void;
}
```
### constructor
create a Queue from an Array.

```js
const queue = new Queue();
// or
// new Queue([1, 2, 3]);
```

### isEmpty
Checks if the Queue is empty.  
```js
console.log(stack.isEmpty()) // true
queue.push(1);
console.log(queue.isEmpty()) // false
```

### size
return the number of elements in the queue.  
```js
console.log(queue.size()) // 1
```
### push
push an element to the top of the queue.  
```js
queue.push(2)
console.log(stack.front()) // 1
console.log(stack.end()) // 2
```
### front
return the element at the front of the queue.  
```js
queue.push(5);
console.log(stack.front()) // 1
```

### end 
return the element at the end of the queue.  
```js
queue.push(6);
console.log(stack.end()) // 6
console.log(stack.size()) // 4
```

### pop
remove and return the top element in the queue.  
```js
console.log(queue.pop()) // 1
console.log(queue.pop()) // 2
console.log(queue.pop()) // 5
console.log(queue.pop()) // 6
console.log(queue.pop()) // undefined
```
### toArray
return an array of elements in the queue.   
```js
queue.push(8).push(9).push(11);
console.log(queue.toArray()) // [8, 9, 11]
```
### clear
remove all elements from the queue.  
```js
queue.clear();
console.log(queue.size()) // 0
console.log(queue.isEmpty()) // true
```
## Coverage
`🚀 grunt coverage`：

```sh
===================== Coverage summary =====================
Statements   : 100% ( 80/80 )
Branches     : 100% ( 6/6 )
Functions    : 100% ( 9/9 )
Lines        : 100% ( 80/80 )
============================================================
```
