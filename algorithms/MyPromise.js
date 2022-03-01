// 实现自定义的promise
/**
 * @param {function} handle
 * @constructor
 */
function MyPromise(handle){
    this.state = "pending";
}


