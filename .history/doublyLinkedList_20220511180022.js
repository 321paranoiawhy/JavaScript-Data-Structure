// https://humanwhocodes.com/blog/2019/02/computer-science-in-javascript-doubly-linked-lists/?utm_source=wechat_session&utm_medium=social&utm_oi=1071532971839766528
// !!! 双向链表节点
class doublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

const head = Symbol('head');
const tail = Symbol('tail');

class doublyLinkedList {
    constructor() {
        this[head] = null;
        this[tail] = null;
    }
    // !!! 以下实现了双向链表的一些操作方法
    // 1. add() 方法 (向双向链表末尾添加新节点)
    add(data) {
        let newNode = new doublyLinkedListNode(data);
        if (this[head] === null) {
            // 如果链表为空, 则设置首节点为新节点
            this[head] = newNode;
        }
        else {
            // 插入至 tail 之后
            this[tail].next = newNode;
            newNode.previous = this[tail];
        }
        // 新节点 作为 新的 tail
        this[tail] = newNode;
    }
    // 2. get(index) 方法 (获取指定索引的节点)
    get(index) {
        if (index > -1) {
            let currentNode = this[head];
            let count = 0;
            while (currentNode !== null && count < index) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode !== null ? currentNode.data : undefined;
        }
        else {
            return undefined
        };
    }
    // 3. remove(index) 方法 (删除指定索引的节点)
    remove(index) {
        // 3.1 如果 首节点 为空 或 索引 小于 0, 抛出 RangeError
        if (this[head] === null || index < 0) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
        // 3.2 index 为 0
        if (index === 0) {
            let data = this[head].data;
            // 令 首节点 指向 下一节点
            this[head] = this[head].next;
            if (this[head] === null) {
                this[tail] = null;
            }
            else {
                this[head].previous = null;
            }
            return data;
        }
        // 当前节点 currentNode
        let currentNode = this[head];
        // 计数
        let count = 0;
        // 遍历至索引为 index 的节点
        while (currentNode !== null && count < index) {
            currentNode = currentNode.next;
            count++;
        }
        if (currentNode !== null) {
            // 前一节点不再指向当前节点, 而是指向当前节点的下一节点 (因为须删除当前节点)
            currentNode.previous.next = currentNode.next;
            // 如果当前节点为尾节点, 则将尾节点指向当前节点的前一节点 (删除当前节点)
            if (this[tail] === currentNode) {
                this[tail] = currentNode.previous;
            }
            // 如果当前节点不是尾节点, 则将当前节点的下一节点的前一节点指向当前节点的前一节点  (删除当前节点)
            else {
                currentNode.next.previous = currentNode.previous;
            }
            // 3.3 返回被删除的当前节点数据
            return currentNode.data;
        }
        // 3.4 抛出 RangeError
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }
    // 返回迭代器示例
    [Symbol.iterator]() {
        return this.values();
    }
    // 正序遍历
    *values() {
        let current = this[head];
        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
    // 倒序遍历
    *reverse() {
        let current = this[tail];
        while (current !== null) {
            yield current.data;
            current = current.previous;
        }
    }
}

// CommonJS 规范 导出
exports.doublyLinkedList = doublyLinkedList;