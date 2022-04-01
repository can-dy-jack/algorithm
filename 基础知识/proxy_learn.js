/**
 * 参考：[](https://es6.ruanyifeng.com/#docs/proxy)
 * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
 * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
 * Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
 *
 * - 合适用来写 Web 服务的客户端。
 * - 也可以用来实现数据库的 ORM 层
 * - Vue等框架
 */

// Proxy 支持的拦截操作
// get(target, propKey, receiver)
// set(target, propKey, value, receiver)
// has(target, propKey)
// deleteProperty(target, propKey)
// ownKeys(target)oxy)
// getOwnPropertyDescriptor(target, propKey)
// defineProperty(target, propKey, propDesc)
// preventExtensions(target)
// getPrototypeOf(target)
// isExtensible(target)
// setPrototypeOf(target, proto)
// apply(target, object, args)
// construct(target, args)

// Proxy 实例的方法
// get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
const obj1 = {
    name: "obj1"
}
let proxy1 = new Proxy(obj1,{
    get: function (target, value){
        if(value in target){
            return target[value];
        } else {
            console.log("属性不存在")
        }
    }
})
console.log(proxy1.name)
proxy1.age
// get方法可以继承: Object.create(proxy1)
let newProxy1 = Object.create(proxy1);
newProxy1.age;

// set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
let proxy2 = new Proxy({},{
    set: function (target,obj,value){
        if(obj === "age"){
            if(!Number.isInteger(value)){
                throw new TypeError("age must is Int");
            }
            if(value > 200){
                throw new TypeError("age must less than 200")
            }
        }
        target[obj] = value;
        // 严格模式下，set代理如果没有返回true，就会报错。
        return true;
    }
})
proxy2.age = 120;
// proxy2.age = 220;
// proxy2.age = "120";

// apply方法拦截函数的调用、call和apply操作。
// apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
function sum (left, right) {
    return left + right;
}
let proxy3 = new Proxy(sum,{
    apply (target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
});
proxy3(1, 2) // 6
proxy3.call(null, 5, 6) // 22
proxy3.apply(null, [7, 8]) // 30

// has()方法用来拦截 HasProperty 操作，即判断对象是否具有某个属性时，这个方法会生效。
// 典型的操作就是in运算符。
// 可以接受两个参数，分别是目标对象、需查询的属性名
let target = { _prop: 'foo', prop: 'foo' };
let proxy4 = new Proxy(target,{
    has (target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
});
console.log('_prop' in proxy4) // false
// 如果原对象不可配置或者禁止扩展( Object.preventExtensions(obj) )，这时 has() 拦截会报错。

// construct()方法用于拦截 new 命令
// 可以接受三个参数：
// target：目标对象。
// args：构造函数的参数数组。
// newTarget：创造实例对象时，new命令作用的构造函数
// construct()方法返回的必须是一个对象，否则会报错。
// construct()拦截的是构造函数，所以它的目标对象必须是函数，否则就会报错。
// construct()方法中的this指向的是handler，而不是实例对象。
let proxy5 = new Proxy(function () {},{
    construct: function(target, args) {
        console.log(this === handler);
        return new target(...args);
    }
});
new proxy5() // true

// deleteProperty方法用于拦截delete操作
// 如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
let target = { _prop: 'foo' };
let proxy6 = new Proxy(target, {
    deleteProperty (target, key) {
        if (key[0] === '_') {
            throw new Error(`Invalid attempt to ${action} private "${key}" property`);
        }
        delete target[key];
        return true;
    }
});
// delete proxy6._prop
// Error: Invalid attempt to delete private "_prop" property

// ........

/** this问题
 *
 * 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。
 * 主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
 */
// Proxy 拦截函数内部的this，指向的是handler对象。



