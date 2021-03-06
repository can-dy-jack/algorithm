// 栈 Stack - 底层：数组
// 后入先出 - LIFO (last-in-first-out)
class Stack{
    constructor() {
        this.data = [];
        this.top = 0;
    };
    push(item){ // 入栈
        this.data.push(item);
        this.top++;
    };
    pop(){ // 出栈 - 退栈
        return this.data[--this.top];
    };
    peek(){ // 返回栈顶的元素但不移除它
        return this.data[this.top-1];
    };
    length(){
        return this.top;
    };
    isEmpty(){
        return this.top === 0;
    }
}

class StackNum{
    constructor() {
        this.data = [];
    };
    push(item){ // 入栈
        this.data.push(item);
    };
    pop(){ // 出栈 - 退栈
        return this.data.pop();
    };
    peek(){ // 返回栈顶的元素但不移除它
        return this.data[this.data.length-1];
    };
    length(){
        return this.data.length;
    };
    isEmpty(){
        return this.data.length === 0;
    }
}
/**
 * 栈用于解决进制转换、回文、DFS算法、模拟递归等问题；
 */
