/**
 * 数学
 */
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

