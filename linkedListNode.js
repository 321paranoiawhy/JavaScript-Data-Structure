// https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
// https://github.com/humanwhocodes/computer-science-in-javascript/tree/master/src/data-structures/linked-list
// !!! 单向链表节点
class linkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 首节点 head
let head = new linkedListNode(1);
// 下一节点 head.next
head.next = new linkedListNode(2);
// 下一节点 head.next.next
head.next.next = new linkedListNode(3);
// 打印链表
console.log(head);

// 遍历链表
// currentNode 初始化为首节点
let currentNode = head;
while (currentNode !== null) {
    // 打印当前节点数据
    console.log(currentNode.data);
    // 更新 currentNode
    currentNode = currentNode.next;
}