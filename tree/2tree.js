/**
 * 树 tree
 *
 * 前序遍历 首先访问根节点，然后遍历左子树，最后遍历右子树。
 * 中序遍历 是先遍历左子树，然后访问根节点，然后遍历右子树。
 * 后序遍历 是先遍历左子树，然后遍历右子树，最后访问树的根节点。
 *
 * 之所以叫前序、中序、后序遍历，是因为根节点在前、中、后
 * 中序常用来在二叉搜索数中得到递增的有序序列；
 * 后序可用于数学中的后缀表示法，结合栈处理表达式，每遇到一个操作符，就可以从栈中弹出栈顶的两个元素，计算并将结果返回到栈中；
 *
 * 以下，使用 递归 或 迭代 方法实现算法
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 1. 前序遍历
 * 首先访问根节点，然后遍历左子树，最后遍历右子树。
 */
// 1.1 递归法
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次。
 * 空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为O(logn)，最坏情况下树呈现链状，为 O(n)。
 */
var preorderTraversal1 = function(root) {
    var arr = [];
    var preorder = (tree)=>{
        if(tree === null) return;
        arr.push(tree.val);
        preorder(tree.left);
        preorder(tree.right);
    }
    preorder(root);
    return arr;
};
// 1.2 迭代法
// 递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其余的实现与细节都相同。
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次。
 * 空间复杂度：O(n)，为迭代过程中显式栈的开销，平均情况下为 O(logn)，最坏情况下树呈现链状，为 O(n)。
 */
var preorderTraversal2 = function(root) {
    let arr = [];
    // 栈 - 数组
    let stack = [],node = root;
    while(stack.length !== 0 || node !== null){
        while(node !== null){
            arr.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    return arr;
};
// 1.3 Morris 遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 巧妙的方法;
 * 可以在线性时间内，只占用常数空间来实现前序遍历。
 * Morris 遍历的核心思想是利用树的大量空闲指针，实现空间开销的极限缩减.
 * 参考：
 *  - https://mp.weixin.qq.com/s?__biz=MzU0ODMyNDk0Mw==&mid=2247489528&idx=1&sn=c339bb1b7e1fef4a186aa9d8563e3856&chksm=fb4184d8cc360dce5e2303e6796a6964952240f5ae8eb6217b8a37d3475a5736b1b011cd58ae&token=1745824839&lang=zh_CN#rd
 *  - https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/er-cha-shu-de-qian-xu-bian-li-by-leetcode-solution/
 *  - https://zhuanlan.zhihu.com/p/101321696
 *  时间复杂度：O(n)，其中 n 是二叉树的节点数。没有左子树的节点只被访问一次，有左子树的节点被访问两次
 * 空间复杂度：O(1)。只操作已经存在的指针（树的空闲指针），因此只需要常数的额外空间。
 */
var preorderTraversal3 = function(root) {
    let arr = [];
    if(root === null) return [];
    let node = root,curr = null;
    while(node !== null){
        curr = node.left;
        if(curr !== null){
            while(curr.right != null && curr.right != node){
                curr = curr.right;
            }
            if(curr.right == null){
                arr.push(node.val);
                curr.right = node;
                node = node.left;
                continue;
            } else {
                curr.right = null;
            }
        } else {
            arr.push(node.val);
        }
        node = node.right;
    }
    return arr;
};

/**
 * 2. 中序遍历
 * 是先遍历左子树，然后访问根节点，然后遍历右子树。
 */
// 2.1 递归法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function(root) {
    let arr = [];
    inorder(root,arr);
    return arr;
};
function inorder(root,arr){
    if(root === null) return;
    inorder(root.left,arr);
    arr.push(root.val);
    inorder(root.right,arr);
}

// 2.2 迭代法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function(root) {
    let arr = [];
    // 迭代
    let stack = [],node = root;
    while(stack.length || node){
        while(node){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        arr.push(node.val);
        node = node.right;
    }
    return arr;
};

// 2.3 Morris 遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 *  - https://zhuanlan.zhihu.com/p/101321696
 */
var inorderTraversal3 = function(root) {
    const res = [];
    let predecessor = null;

    while (root) {
        if (root.left) {
            predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }
            if (!predecessor.right) {
                predecessor.right = root;
                root = root.left;
            }
            else {
                res.push(root.val);
                predecessor.right = null;
                root = root.right;
            }
        }
        else {
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
};

/**
 * 3.后序遍历
 * 后序遍历 是先遍历左子树，然后遍历右子树，最后访问树的根节点。
 */
// 3.1 递归法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal1 = function(root) {
    let arr = [];
    postorder(root,arr);
    return arr;
};

function postorder(root,arr){
    if(root === null) return;
    postorder(root.left,arr);
    postorder(root.right,arr);
    arr.push(root.val);
}

// 3.2 迭代法
var postorderTraversal2 = function(root) {
    let arr = [];
    let stack = [],node = null;
    while(stack.length || root){
        while(root){
            stack.push(root)
            root = root.left;
        }
        root = stack.pop();
        if(root.right === null || root.right ===node){
            arr.push(root.val);
            node = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }
    }
    return arr;
};

// 3.3 Morris 遍历
var postorderTraversal3 = function(root) {
    let res = [];
    if (root == null) return res;
    let p1 = root, p2 = null;

    while (p1 != null) {
        p2 = p1.left;
        if (p2 != null) {
            while (p2.right !== null && p2.right !== p1) {
                p2 = p2.right;
            }
            if (p2.right == null) {
                p2.right = p1;
                p1 = p1.left;
                continue;
            } else {
                p2.right = null;
                addPath(res, p1.left);
            }
        }
        p1 = p1.right;
    }
    addPath(res, root);
    return res;
}
function addPath(res,node) {
    let count = 0;
    while (node != null) {
        ++count;
        res.push(node.val);
        node = node.right;
    }
    let left = res.length - count, right = res.length - 1;
    while (left < right) {
        let temp = res[left];
        res[left] = res[right];
        res[right] = temp;
        left++;
        right--;
    }
}

/**
 * !!层序遍历!! 就是逐层遍历树结构。
 * 广度优先搜索是一种广泛运用在树或图这类数据结构中，遍历或搜索的算法。
 * 该算法从一个根节点开始，首先访问节点本身。 然后遍历它的相邻节点，其次遍历它的二级邻节点、三级邻节点，以此类推
 * 当我们在树中进行广度优先搜索时，我们访问的节点的顺序是按照层序遍历顺序的。
 */
var levelOrder = function(root) {
    let arr = [],stack = [];
    if(root === null) return [];
    stack.push(root);
    while(stack.length){
        let temp = [],size = stack.length;
        for(let i = 0;i<size;i++){
            let t = stack.shift();
            temp.push(t.val);
            if(t.left !== null) stack.push(t.left);
            if(t.right !== null) stack.push(t.right);
        }
        arr.push(temp);
    }
    return arr;
};

/**
 * “自顶向下” 的解决方案 topToButtom  —— “自底向上” 的解决方案 bottomToTop
 * 参考： https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefb4e/
 *
 * 给定一个二叉树，寻找它的最大深度。
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    return Math.max(maxDepth(root.left)+1,maxDepth(root.right)+1);
};


/**
 * DFS（Depth first search）深度优先搜索。
 * BFS（Breadth first search）广度优先搜索。
 */
