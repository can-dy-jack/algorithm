---
title: stack
---
stack implementation in JavaScript

> 后入先出 - LIFO (last-in-first-out)  
> 栈用于解决进制转换、回文、DFS算法、模拟递归等问题

<!-- 栈 Stack - 底层：数组 -->
## install
```sh
npm i @kartjim/stack
```

## export
```js
const { Stack } = require('@kartjim/stack');
```

or ESM :
```js
import { Stack } from "@kartjim/stack";
```

## Stack API
```ts
export class Stack<T> {
    constructor(arr?: T[]);
    isEmpty(): boolean;
    size(): number;
    peek(): T;
    push(item: T): Stack<T>;
    pop(): T;
}
```
### constructor
create a Stack from an Array.

```js
new Stack();
// or
// new Stack([1, 2, 3]);
```
### isEmpty
Checks if the stack is empty.  
```js
console.log(stack.isEmpty()) // true
stack.push(5);
stack.push(3);
console.log(stack.isEmpty()) // false
```

### size
return the number of elements in the stack.  
```js
console.log(stack.size()) // 2
```
### peek
return the top element in the stack.  
```js
console.log(stack.peek()) // 3
stack.pop();
stack.pop();
console.log(stack.peek()) // undefined
```
### push
push an element to the top of the stack.  
```js
stack.push(5);
stack.push(7)
console.log(stack.peek()) // 7
console.log(stack.size()) // 2
```
### pop
remove and return the top element in the stack.  
```js
console.log(stack.pop()) // 7
console.log(stack.size()) // 1
stack.pop();
console.log(stack.pop()) // undefined
```

## Coverage
`🚀 grunt coverage` :

```sh
============= Coverage summary =============
Statements   : 100% ( 56/56 )
Branches     : 100% ( 6/6 )
Functions    : 100% ( 6/6 )
Lines        : 100% ( 55/55 )
============================================
```
