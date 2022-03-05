---
title: promise学习笔记
---
ES6原生提供了Promise对象
Promise 是一个对象，它代表了一个异步操作的最终完成或者失败。  
Promise能够很好的避免回调函数的嵌套，让函数更具可读性和维护性。

控制台输入`console.dir(Promise)`查看 promise 是什么：

![Promise](https://s2.loli.net/2021/12/10/yIuXmMBpifwUP73.png)

<!--more-->
## 使用 Promise


本质上 Promise 是一个函数返回的对象，我们可以在它上面绑定回调函数，这样我们就不需要在一开始把回调函数作为参数传入这个函数了。

假设现在有一个名为 createAudioFileAsync() 的函数，它接收一些配置和两个回调函数，然后异步地生成音频文件。一个回调函数在文件成功创建时被调用，另一个则在出现异常时被调用。

```javascript
// 成功的回调函数
function successCallback(result) {
  console.log("音频文件创建成功: " + result);
}
// 失败的回调函数
function failureCallback(error) {
  console.log("音频文件创建失败: " + error);
}
createAudioFileAsync(audioSettings, successCallback, failureCallback)
```

如果函数 `createAudioFileAsync()` 被重写为返回 Promise 的形式，那么我们可以像下面这样简单地调用它：

```javascript
createAudioFileAsync(audioSettings)
    .then(successCallback, failureCallback);
```

我们把这个称为 `异步函数调用` ，这种形式有若干优点。

### 约定

不同于“老式”的传入回调，在使用 Promise 时，会有以下约定：

- 在本轮 事件循环 运行完成之前，回调函数是不会被调用的。
- 即使异步操作已经完成（成功或失败），在这之后通过 then() 添加的回调函数也会被调用。
- 通过多次调用 then() 可以添加多个回调函数，它们会按照插入顺序进行执行。

Promise 很棒的一点就是`链式调用（chaining）`。

### 链式调用

连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 Promise 链来实现这种需求。

> then() 函数会返回一个和原来不同的新的 Promise

```javascript
const promise2 = doSomething().then(successCallback, failureCallback);
```

promise2 不仅表示 *doSomething()* 函数的完成，也代表了你传入的 *successCallback* 或者 *failureCallback* 的完成，这两个函数也可以返回一个 Promise 对象，从而形成另一个异步操作，这样的话，在 promise2 上新增的回调函数会排在这个 Promise 对象的后面。

基本上，每一个 Promise 都代表了链中另一个异步过程的完成。


在过去，要想做多重的异步操作，会导致经典的回调地狱：

```javascript
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

现在，我们可以把回调绑定到返回的 Promise 上，形成一个 Promise 链：

```javascript
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

then 里的参数是可选的，catch(failureCallback) 是 then(null, failureCallback) 的缩略形式。

如下所示，我们也可以用箭头函数来表示：

```javascript
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```


一定要有返回值，否则，callback 将无法获取上一个 Promise 的结果。(如果使用箭头函数，() => x 比 () => { return x; } 更简洁一些，但后一种保留 return 的写法才支持使用多个语句。）。

## resolve & reject

> Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve方法和reject方法。
> 如果异步操作成功，则用resolve方法将Promise对象的状态变为“成功”（即从pending变为resolved）；
> 如果异步操作失败，则用reject方法将状态变为“失败”（即从pending变为rejected）。

```javascript
var promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // success
}, function(value) {
  // failure
})
```

- `Promise.prototype.then`方法返回的是一个新的Promise对象，因此可以采用链式写法。
- `Promise.prototype.catch`方法是`Promise.prototype.then(null, rejection)`的别名，用于指定发生错误时的回调函数。
  - Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
- `Promise.all`和`Promise.race`方法方法用于将多个Promise实例，包装成一个新的Promise实例。

## 参考文章 & More

- [MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Using_promises](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
- [Generator 函数 | ECMAScript 6入门](https://wohugb.gitbooks.io/ecmascript-6/content/docs/promise.html)

## async/await 语法糖

> async函数是使用async关键字声明的函数。async和await关键字让我们可以用一种更简洁的方式写出基于Promise的异步行为，而无需刻意地链式调用promise。

async函数是用来取代回调函数的另一种方法。

只要函数名之前加上async关键字，就表明该函数内部有异步操作。该异步操作应该返回一个Promise对象，前面用await关键字注明。当函数执行的时候，一旦遇到await就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。

[more](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
