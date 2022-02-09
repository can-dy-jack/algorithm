class Stack{
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
}

