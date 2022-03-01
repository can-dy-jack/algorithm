// 实现自定义的promise
function MyPromise(handle){

}

// new MyPromise(function (resolve,reject){
//     setTimeout(function (){
//         resolve("1s passed");
//     },1000);
// }).then(function (data){
//     console.log(data);
//     return new MyPromise(function (resolve,reject){
//         setTimeout(function (){
//             resolve("10s passed");
//         },1000);
//     })
// }).then(function (data){
//     console.log(data);
// })
