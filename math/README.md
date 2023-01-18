```js
// 1、求最大公约数gcd 、最小公倍数lcm
/**
 * @param {number} a 分子
 * @param {number} b 分母
 * @return {number}
 */
const gcd = function (a,b){
    return b === 0 ? a : gcd(b,a % b);
}
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const lcm = function (a,b){

    // 最小公倍数 = 两数之积 ÷ 最大公约数
    return (a*b)/gcd(a,b);
}

// math
/**
 * swap two items
 * @param first
 * @param second
 */
const swap1 = (first,second)=>{
    const t = first;
    first = second;
    second = t;
}
const swap2 = (first,second)=>{
    // 先加后减 - 适用于数字 - 可能导致数字越界
    first += second;
    second = first - second;
    first = first - second;
}
const swap3 = (first,second)=>{
    // 先减后加 - 适用于数字 - 可能导致数字越界
    first -= second;
    second = first + second;
    first = second - first;
}
const swap4 = (first,second)=>{
    // 位运算完成数字交换  a^a = 0,a^b = b^a
    first = first^second;
    second = first^second;
    first = second^first;
    console.log(first,second);
}

```