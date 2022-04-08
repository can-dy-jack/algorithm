/**
 * WeakMap and WeakSet are disabled,because they are not iterable.
 *
 * // 参考：https://github.com/zxuqian/code-examples/blob/master/javascript/01-deep-clone/index.js
 * // Date 、 Symbol 类型 暂时未解决
 */
function deepClone(obj,hash = new WeakMap()) {
    if(obj === null || typeof obj !== 'object'){
        // null     ||  number string boolean undefined function
        return obj;
    }
    if (hash.has(obj)) return hash.get(obj);

    // object
    if(obj instanceof Set){ // Set 类型
        const t = new Set();
        hash.set(obj, t);
        obj.forEach((val)=>{
            t.add(deepClone(val,hash));
        });
        return t;
    } else if(obj instanceof Map){ // Map 类型
        const t = new Map();
        hash.set(obj, t);
        obj.forEach((val,i)=>{
            t.set(i,deepClone(val,hash));
        })
        return t;
    } else if(obj instanceof RegExp){ // 正则 类型
        return new RegExp(obj);
    }
    else { // array {} ...
        const t = new obj.constructor();
        hash.set(obj, t);
        for (const i in obj) {
            t[i] = deepClone(obj[i],hash);
        }
        return t;
    }
}

// test code
const obj = {
    // a: 1,
    // g: 'string',
    // h: true,
    // i: null,
    j: function (){
        console.log(3);
    },
    b: new Set([1,2,3,4,new Set([5,6])]),
    c: new Map([
        ['a','Number'],
        ['b','Set'],
        ['c','Map'],
        ['d','RegExp'],
        ['e','Object']
    ]),
    // d: /^regexp/g,
    // e: [{a:10},new Date()],
    // // f: undefined,
    // k: [1,2,3,43,new Set([7,8])] ,
    // l: new Date('2022-4-8'),
}

obj.self = obj; // 循环引用
const deep = deepClone(obj); // 深拷贝

console.log(deep);
console.log(obj);
console.log(obj === deep); //false

