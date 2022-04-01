/**
 * 动态规划（英语：Dynamic programming，简称 DP）是一种通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。
 * 动态规划不是某一种具体的算法，而是一种算法思想：若要解一个给定问题，我们需要解其不同部分（即子问题），再根据子问题的解以得出原问题的解。
 *
 * 参考资料：
 * 作者：FennelDumplings
 * 链接：https://leetcode-cn.com/leetbook/read/dynamic-programming-1-plus/xceyqr/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

// 一个问题的最优解是由它的各个子问题的最优解决定的。
// 将子问题的解进行组合可以得到原问题的解是动态规划可行性的关键。
// 找到了最优子结构，也就能推导出一个状态转移方程 f(n)，通过这个状态转移方程，我们能很快的写出问题的递归实现方法。
// 解决动态规划问题的核心：找出子问题及其子问题与原问题的关系
/**
 * 如何定义 f(n)
 * 如何通过 f(1), f(2), … f(n−1) 推导出 f(n)，即状态转移方程
 */
// 300
var lengthOfLIS = function(nums) {
    // dp
    let max = 1;
    const dp = new Array(nums.length).fill(1);
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<i;j++){
            if(nums[i]>nums[j]) {
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
        max = Math.max(max,dp[i]);
    }
    return max;
};

// 线性动态规划
// 状态定义，状态的转移，初始化和边界条件。




