// https://humanwhocodes.com/blog/2019/02/computer-science-in-javascript-doubly-linked-lists/
// !!! 双向链表节点
class doublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

// 创建首节点
let head = new doublyLinkedListNode(12);
// 创建第二节点
let secondNode = new doublyLinkedListNode(99);
head.next = secondNode;
secondNode.previous = head;
// 创建第三节点
let thirdNode = new doublyLinkedListNode(37);
secondNode.next = thirdNode;
thirdNode.previous = secondNode;
let tail = thirdNode;
// 打印链表
console.log(head);

// 正向遍历
let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
// 12 99 37

// 反向遍历
let reverse = tail;
while (reverse !== null) {
    console.log(reverse.data);
    reverse = reverse.previous;
}
// 37 99 12