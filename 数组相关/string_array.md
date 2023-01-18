---
title: 算法之数组和字符串 - JavaScript版
---

字符串算是特殊的数组，解题方法也相似。

## 集合、列表和数组

### 集合

> 集合，简称集，是数学中一个基本概念，也是集合论的主要研究对象。  
> 集合论的基本理论创立于19世纪，在朴素集合论中的定义，集合是“确定的一堆东西”，集合里的“东西”则称为元素。  
> 现代的集合一般被定义为：由一个或多个确定的元素所构成的整体  

相信大家在中学数学课程中都学习过`集合`的概念，这同样适用于计算机世界。

集合的基本属性：
- 集合里的*元素类型不一定相同*。
- 集合里的*元素没有顺序*
- 集合里的*元素是唯一的*

JS中集合为 `Set对象` ，MDN上定义`Set`为：
> Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

我认为Set对象最重要的属性就是 **Set 中的值总是唯一的**。

JavaScript中使用`Set()`创建一个新的Set对象。
```javascript
const set1 = new Set([2,5,2,8,4]);
console.log(set1.has(5)); // true
console.log(set1); // Set(4) { 2, 5, 8, 4 } ，重复的数字2被去除了
```
其中`.has(value)`是集合的方法，返回一个布尔值，表示该值在Set中存在与否。

另外， `Set` 有属性 `size` ，返回 Set 对象中的值的个数。

这里简单列举一些集合的基本方法：
- add()
  - 在Set对象尾部添加一个元素。返回该Set对象。
- delete()
  - 移除Set中与这个值相等的元素
- clear()
  - 移除Set对象内的所有元素。
- has()
  - 返回一个布尔值，表示该值在Set中存在与否。
- values()
  - 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。

### 列表

列表（又称线性列表）的定义为：是一种数据项构成的有限序列，即按照一定的线性顺序，排列而成的数据项的集合。  
列表的概念是在集合的特征上形成的，它具有顺序，且长度是可变的。

**列表的两种主要表现是数组和链表,栈和队列是两种特殊类型的列表。**

### 数组
数组是列表的主要实现方式之一。

数组（Array）是有序的元素序列，在不同的编程语言中实现方式具有差别。比如 C++ 和 Java 中，数组中的元素类型必须保持一致，而 Python 和 JavaScript 中则可以不同。

MDN中: JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。  
数组是有序的，可以使用 索引 来访问数组中的元素。而列表中没有索引，这是数组与列表最大的不同点。

数组的基本操作：
- 读取元素
  - 通过访问索引的方式来读取的
- 查找元素
  - 利用索引从头开始找；时间复杂度：O(N)
- 插入元素
  - 插入元素会引起数组中元素大规模的互换操作
  - 需要频繁操作数据可以使用链表：[链表与约瑟夫环 - JavaScript版](https://blog.csdn.net/qq_46590483/article/details/122014764?spm=1001.2014.3001.5501)
- 删除元素
  - 同样会引起数组中元素大规模的互换操作

## 暴力解法
暴力求解一般是最容易想到的解法，但是暴力求解的效率一般不高；
如果是对时间有要求的情况下，可能会超时，需要用其它方法优化一下或者使用其它算法。  

下面一个例子使用暴力求解（写成一个函数）：
> 给定一个整数数组，判断是否存在重复元素。

```javascript
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
}
```
时间复杂度为 O(n^2) ，如果是在 leetcode 上提交题解，有很大可能会超时。    
这时可以使用一些技巧：  
我们可以看到，题目要求`是否有重复元素`，所以使用集合最为方便，只需要把数组转化为集合，然后求前后长度是否一致即可！
```javascript
function containsDuplicate(nums) {
    let set1 = new Set(nums);
    return nums.length !== set1.size
};
```
或者您可以使用`.sort((a,b) => a-b)`进行排序之后前后判断是否有重复元素。

## 善用API
`不要重复造轮子`是很有道理的，如果有相关的API，就要善于去利用！（除非你在练习算法或自己的逻辑思维能力）

有题目：
> 找到字符串的第一个不重复的字符，返回它的索引。
```javascript
function uniqueChar(s) {
    for (let i = 0;i<s.length;i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
};
```
这题，如果不使用API，还是比较难写的（可能其他方法写出来更简单，但是思考的过程比较漫长，如果你是算法大佬，当我没说）。

## 双指针法
双指针法是指利用两个`指针`分别指向数组的特定位置（开头或尾部等），然后按照不同条件让两个`指针`移动，达到交换数组元素的目的。
`指针`可以是数组的索引等。
双指针法经常在排序数组中使用。

有题：
> 给你一个有序数组 `nums` ，原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。
> 不要使用额外的数组空间， `原地` 修改输入数组，并在使用 `O(1)` 额外空间的条件下完成。

_不需要考虑数组中超出新长度后面的元素。_

```javascript
function removeDuplicates (nums) {
    if(nums == []) return 0;
    let left = 0; // 左指针，或称为慢指针
    for(let right = 0;right<nums.length;right++){
        // 如果右指针指向的值等于左指针指向的值，左指针不动。
        // 如果右指针指向的值不等于左指针指向的值，那么左指针往右移一步，然后再把右指针指向的值赋给左指针。
        if(nums[left] != nums[right]) {
            left ++;
            nums[left] = nums[right];
        }
    }
    return left+1;
};
```

## 二分法
二分法查找，是一种在有序数组中查找特定元素的搜索算法。

二分法查找的思路如下：
（1）首先，从数组的中间元素开始搜索，如果该元素正好是目标元素，则搜索过程结束，否则执行下一步。
（2）如果目标元素大于(小于)中间元素，则在数组大于(小于)中间元素的那一半区域查找，然后重复步骤（1）的操作。

**二分法查找的时间复杂度O(log(n))**

算法实现：
```javascript
function search(nums, target) {
    let left = 0,right = nums.length-1;
    while(left<=right){
        let middle = Math.ceil(left + (right-left)/2);
        if(nums[middle] === target){
            return middle;
        }else if(nums[middle]<target){
            left = middle+1;
        }else{
            right = middle-1;
        }
    }
    return left;
};
```

## 滑动窗口

滑动窗口就是利用队列的思想,将队列的元素与目标元素进行比较。
如果队列没有目标元素,就将目标元素填充到队列中。
如果有目标元素那就不继续滑动窗口，将队列元素返回。

用以解决数组/字符串的子元素问题，它可以将嵌套的循环问题，转换为单循环问题，降低时间复杂度。

看题：
> 找出该数组中满足其和 大于等于目标数字 的`长度最小`的 `连续子数组`，并返回其长度。

```javascript
function minSub(target, nums) {
    let left = 0,right = 0,re = 0,len = 0;
    while(right < nums.length){
        re += nums[right];
        while(re>=target){
            len = len?Math.min(len,right-left+1):right-left+1;
            re -= nums[left];
            left ++;
        }
        right ++;
    }
    return len;
};
```

可以参考文章：[滑动窗口算法](https://www.zhihu.com/question/314669016)

## 贪心算法

> 贪心算法是对完成一件事情的方法的描述，贪心算法每一次都做出当前看起来最好的选择，而不用考虑其它可能的选择。

只看概念其实并不好理解，还是通过例子了解贪心算法（题目来自 [力扣](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii) ）：
> 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。计算你所能获取的最大利润。

示例:  
输入: prices = [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

示例 2:  
输入: prices = [1,2,3,4,5]  
输出: 4  
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。

分析：由于股票的购买没有限制，因此整个问题等价于价格上升的所有区间的和。
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    let n = prices.length;
    for (let i = 1; i < n; ++i) {
      ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
};
```

_贪心算法只能用于计算最大利润，计算的过程并不是实际的交易过程。_ 如第二个示例，按算法里是进行 4 次买入和 4 次卖出，但是实际的交易过程并不是，实际情况是第一天买入，第五天卖出。

- 时间复杂度：O(n)
- 空间复杂度：O(1)

贪心算法让解决过程`更简单`，不需要考虑太多，直逼结果的感觉。

--- 
## More

和贪心算法相关的其它知识：
- 回溯算法
- 动态规划

字符串匹配算法：
- 暴力匹配
- Knuth-Morris-Pratt 算法，即KMP算法
  - [可参考 阮一峰的博客](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)
  - [LeetCode - KMP](https://leetcode-cn.com/leetbook/read/array-and-string/cpoo6/)
- Boyer-Moore 算法
- Sunday 算法等


以上，是本人的学习算法与数据结构的阶段总结笔记，如有不足，请指正。

## 参考文章

- [百度百科 - 集合](https://baike.baidu.com/item/%E9%9B%86%E5%90%88/2908117?fr=aladdin)
- [MDN - Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN - Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [例题来自leetcode](https://leetcode-cn.com/leetbook/)
- [JavaScript滑动窗口思想](https://zhuanlan.zhihu.com/p/338744177)

