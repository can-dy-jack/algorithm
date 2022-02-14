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
class Queue{
    constructor(start = 0) {
        this.data = [];
        this.head = start;
    }
    add(item){
        this.data.push(item);
        return true;
    }
    delete(){
        if(!this.data.length){
            console.warn('Queue is empty.')
            return false;
        }else{
            this.head ++;
            return true;
        }
    }
    front(){
        return this.data[this.head];
    }
    isEmpty(){
        return this.head >= this.data.length;
    }
}
