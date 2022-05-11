class linkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 首节点 head
let head = new linkedList(1);
// 下一节点 head.next
head.next = new linkedList(2);
// 下一节点 head.next.next
head.next.next = new linkedList(3);

// 遍历链表
// currentNode 初始化为首节点
let currentNode = head;
while (currentNode !== null) {
    // 打印当前节点数据
    console.log(currentNode.data);
    // 更新 currentNode
    currentNode = currentNode.next;
}