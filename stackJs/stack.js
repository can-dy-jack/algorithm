// 栈 Stack - 底层：数组
/**
 * class Stack
 */
class Stack{
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(item){ // 入栈
        this.data.push(item);
        this.top++;
    }
    pop(){ // 出栈
        return this.data[--this.top];
    }
    peek(){ // 返回栈顶的元素但不移除它
        return this.data[this.top-1];
    }
    length(){
        return this.top;
    }
}
// console.log(new Stack().top)
var s = new Stack();
s.push('David');
s.push('Ray');
s.push('Bryan');
console.log(s.length());
console.log(s.peek())

