/**
 * curry
 * 函数柯里化
 */
// 要实现  add(2)(3)(5) = 10
// 1、闭包 - 代码不够优雅;可扩展性差。
function add1(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add1(2)(3)(5));
// 2.1、函数柯里化
// attachEvent(IE) - addEventListener(mainstream)
// (function (){})() - 立即执行函数
// const whichEvent = (function (){
//     if(window.addEventListener){
//         return function (element,type,listener,useCapture){
//             element.addEventListener(type,function (event){
//                 listener.call(element,event);
//             },useCapture);
//         }
//     } else if(window.attachEvent){
//         return function (element,type,handler){
//             element.attachEvent('on'+type,function (e){
//                 handler.call(element,e);
//             })
//         }
//     }
// })();
// 2.2 函数柯里化 实现 add(2)(3)(5)
// 有很多实现方式
function add2(){
    // arguments是对象，不是数组
    // JavaScript中的Array.prototype.slice.call(arguments)能将有length属性的对象转换为数组
    let args = Array.prototype.slice.call(arguments);
    let inner = function (){
        args.push(...arguments);
        return inner;
    }
    // 返回的是一个函数的toString方法，利用一下即可
    inner.toString = () => {
        return args.reduce((next,sum)=>{
            return next + sum;
        })
    }
    return inner;
}
console.log(add2(2)(3)(5).toString());
console.log(add2(2, 3)(5).toString());
console.log(add2(2, 3, 5).toString());
console.log(add2(2)(2)(2)(2)(2).toString());

