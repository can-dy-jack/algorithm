# 排序算法

- 选泡插：选择排序、冒泡排序、插入排序
  - 时间复杂度 O(n^2) 级排序算法
- 快归希堆：快速排序、归并排序、希尔排序、堆排序
- 桶计基：桶排序、计数排序、基数排序

## 冒泡排序
>  冒泡排序是入门级、经典的算法  
> 空间复杂度为 O(1)，时间复杂度为 O(n^2)

### 基本写法
```javascript
function bubbleSort(arr){
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 如果左边的数大于右边的数，则交换，保证右边的数字最大
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
}
```

### 优化写法-1

```javascript
function bubbleSort(arr){
  for (let i = 0; i < arr.length - 1; i++) {
    let isOrder = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if(isOrder) break;
      // 如果一轮比较中没有发生过交换，则立即停止排序，因为此时剩余数字一定已经有序了。
      isOrder = true;
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        isOrder = false;
      }
    }
  }
}
```

### 优化写法-2

```javascript
function bubbleSort(arr) {
    let swapped = true;
    // 最后一个没有经过排序的元素的下标
    let indexOfLastUnsortedElement = arr.length - 1;
    // 上次发生交换的位置
    let swappedIndex = -1;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < indexOfLastUnsortedElement; i++) {
            if (arr[i] > arr[i + 1]) {
              [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                // 表示发生了交换
                swapped = true;
                // 更新交换的位置
                swappedIndex = i;
            }
        }
        // 最后一个没有经过排序的元素的下标就是最后一次发生交换的位置
        indexOfLastUnsortedElement = swappedIndex;
    }
}
```

### 选择排序

> 选择排序的思想是：双重循环遍历数组，每经过一轮比较，找到最小元素的下标，将其交换至首位。




