// DFS
// 深度优先搜索（DFS）是用于 在树/图中遍历/搜索 的另一种重要算法。也可以在更抽象的场景中使用。

/**
 * 递归 - DFS
 * @param {Node} cur
 * @param {Node} target
 * @param {Set<Node>} visited
 * @return {boolean}
 * @constructor
 * 当我们递归地实现 DFS 时，似乎不需要使用任何栈。但实际上，我们使用的是由系统提供的隐式栈，也称为调用栈
 */
// function DFS1(cur, target,visited) {
//     if(cur === target) return true;
//     for (let next of cur.next) {
//         if (!visited.has(next)) {
//             visited.add(next);
//             if(DFS1(next, target, visited) === true) return true
//         }
//     }
//     return false;
// }
// 应用题目：https://leetcode-cn.com/problems/number-of-islands

// 显式栈实现 DFS
/**
 * @param {number} root
 * @param {number} target
 * @return
 */
// function DFS2(root,target) {
//     Set<Node> visited;
//     Stack<Node> s;
//     add root to s;
//     while (s is not empty) {
//         Node cur = the top element in s;
//         return true if cur is target;
//         for (Node next : the neighbors of cur) {
//             if (next is not in visited) {
//                 add next to s;
//                 add next to visited;
//             }
//         }
//         remove cur from s;
//     }
//     return false;
// }

