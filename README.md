# JavaScript算法与数据结构库

## 数据结构

- 单向链表/双向链表：[LinkedList / DoubleLinkedList](https://github.com/can-dy-jack/linkedlist)
    - *循环链表 - 最后一个结点的指针域指向头结点，整个链表形成一个环*
- 堆: [MaxHeap / MinHeap](https://github.com/can-dy-jack/heap)
    - 堆排序：[maxHeapSort / minHeapSort](https://github.com/can-dy-jack/heap)
    - Top K 大：
        - 最大堆解决  => 最小堆解决 
    - Top K 小：
        - 最小堆解决  => 最大堆解决
- 优先队列： [PriorityQueue](https://github.com/can-dy-jack/priority-queue)
- 栈： [Stack](https://github.com/can-dy-jack/stack)
- 队列： [Queue](https://github.com/can-dy-jack/queue)

### npm
javascript data structure repository.  
js数据结构集成库。

> sum up all data structures of @kartjim into a single repository.

```sh
npm i structure-extend
```
or use yarn
```sh
yarn add structure-extend
```
#### import

```js
const {
    Queue,
    Stack,
    MaxHeap,
    MinHeap,
    minHeapSort,
    maxHeapSort,
    PriorityQueue,
    LinkedList,
    DoubleLinkedList,
    LinkedListNode,
    DoubleLinkedListNode
} = require('structure-extend')
```
or use ESM：
```js
import {
    Queue,
    Stack,
    MaxHeap,
    MinHeap,
    minHeapSort,
    maxHeapSort,
    PriorityQueue,
    LinkedList,
    DoubleLinkedList,
    LinkedListNode,
    DoubleLinkedListNode,
} from 'structure-extend';
```

## 算法
数组相关、字符串相关、双指针、滑动窗口、二分、位运算、DFS、BFS、回溯、字典树、前缀树、并查集、线段树、树状数组、记忆化搜索、分治、DP、贪心、图论、数论。。。

数组相关：
- 前缀和
- 差分

<!-- 一维前缀，二维前缀； https://leetcode.cn/problems/range-sum-query-2d-immutable/
  一维差分，二维差分； 二维差分主要是用于快速将一个区块中的所有元素都加上 。https://leetcode.cn/problems/increment-submatrices-by-one/ -->

<!-- KMP -->

<!-- 算法仓库：二分查找\KMP算法\... -> 不做成代码库，写成文档库也行 -->
