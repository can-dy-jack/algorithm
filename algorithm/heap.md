---
title: heap
---

> `堆` 在大部分编程语言中，都已经有内置方法实现它，但似乎JS并没有。
>
> 最大堆和最小堆：用于高效快速地取得当前数据集中最大或者最小的元素

> The default initial size of heap is 0.  

<!-- 
插入：找到第一个空子节点，插入，然后与父节点不断替换，直到符合特点
删除：找到最后一个子节点，放到根上，然后与子节点不断替换，直到符合特点

0 处为个数
父节点：n/2
左节点：n*2
右节点：n*1+1
叶子节点个数：索引大于 n/2 的都是 
 -->

## install
```sh
npm i @kartjim/heap
```
## require
```js
const {
    MaxHeap,
    MinHeap,
    minHeapSort,
    maxHeapSort
} = require('@kartjim/heap');
```

## import 
```js
import {
    MaxHeap,
    MinHeap,
    minHeapSort,
    maxHeapSort
} from '@kartjim/heap';
```

## HeapSort
### maxHeapSort
> sort the array using MaxHeap (from maximum to minimum).

时间复杂度： $O(log N)$ 

```js
const arr = [12, 668, 1, 0, 4, 67];
maxHeapSort(arr) // [668, 67, 12, 4, 1, 0]
```
### minHeapSort
> sort the array using MaxHeap (from minimum to maximum).

时间复杂度： $O(log N)$ 

```js
const arr = [12, 668, 1, 0, 4, 67];
minHeapSort(arr) // [0, 1, 4, 12, 67, 668]
```

## MaxHeap API
### use
constructor 

时间复杂度： $O(N)$    
空间复杂度： $O(N)$  
```js
const heap = new MaxHeap(4);
```

### push
> add a new element to the MaxHeap.  

时间复杂度： $O(log N)$  
空间复杂度： $O(1)$
```js
heap.push(1);
heap.push(2);
heap.push(3);
```

### peek
> return the max element in the MaxHeap.  

时间复杂度： $O(1)$。  
空间复杂度： $O(1)$。
```js
heap.peek() // 3
```

### pop
> remove the max element in the MaxHeap.  

时间复杂度： $O(log N)$      
空间复杂度： $O(1)$
```js
heap.pop() // 3
```

### getSize
> return the size of the MaxHeap.

```js
heap.getSize() // 2
```
### isEmpty
> check if the MaxHeap is empty

```js
heap.isEmpty() // false
```
### isFull
> check if the MaxHeap is full

```js
heap.isFull() // true
```
### MaxHeap.heapify
> create a MaxHeap from a Array.

```js
const t = MaxHeap.heapify([1, 2, 3, 4]);
t.peek() // 4
```

## MinHeap API
### use
constructor 

时间复杂度： $O(N)$    
空间复杂度： $O(N)$  
```js
const heap = new MinHeap(4);
```

### push
> add a new element to the MinHeap.  

时间复杂度： $O(log N)$  
空间复杂度： $O(1)$
```js
heap.push(1);
heap.push(2);
heap.push(3);
```

### peek
> return the max element in the MinHeap.  

时间复杂度： $O(1)$。  
空间复杂度： $O(1)$。
```js
heap.peek() // 1
```

### pop
> remove the max element in the MinHeap.  

时间复杂度： $O(log N)$      
空间复杂度： $O(1)$
```js
heap.pop() // 1
```

### getSize
> return the size of the MinHeap.

```js
heap.getSize() // 2
```
### isEmpty
> check if the MinHeap is empty

```js
heap.isEmpty() // false
```
### isFull
> check if the MinHeap is full

```js
heap.isFull() // true
```
### MaxHeap.heapify
> create a MinHeap from a Array.

```js
const t = MaxHeap.heapify([1, 2, 3, 4]);
t.peek() // 1
```


