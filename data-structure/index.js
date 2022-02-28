// ListNode
let node = new ListNode();
// console.log(node.head);
// console.log(node.size);
node.push(111);
node.push(8);
node.push(222);
node.push(333);
node.push(444);
console.log(node.size);
console.log(node.get(2));
console.log(node.print());
console.log(node.remove(222));
console.log(node.print());
console.log(node.removeAtIndex(3));
console.log(node.print());
console.log(node.find("---"));
console.log(node.find(222));
console.log(node.print());
node.insert(0,0)
node.insert(3,111)
node.insert(5,666)
console.log(node.print());
console.log(node.toString());
console.log(ListNode.prototype);

//
