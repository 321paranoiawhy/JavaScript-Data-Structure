// !!! 单向链表节点
class linkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// !!! 使用 Symbol 定义唯一的属性名 head
const head = Symbol('head');

// !!! 单向链表
class linkedList {
    constructor() {
        this[head] = null;
    }

    // !!! 以下实现了单向链表的一些操作方法
    // 1. add() 方法 (向单向链表末尾添加新节点)
    add(data) {
        let newNode = new linkedListNode(data);
        // 空链表
        if (this[head] === null) {
            // 新节点直接赋值给首节点
            this[head] = newNode;
        }
        // 如果链表不为空
        else {
            // 当前节点 currentNode
            let currentNode = this[head];
            // 遍历至最后一个节点 (指向 null)
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            // 最后一个节点指向新节点, 新节点则指向 null
            currentNode.next = newNode;
        }
    }

    // 2. get(index) 方法 (获取指定索引的节点)
    get(index) {
        // 如果索引小于 0, 返回 undefined
        if (index < 0) {
            return undefined;
        }
        else {
            // 当前节点 currentNode
            let currentNode = this[head];
            // 计数
            let count = 0;
            // 遍历至索引为 index 的节点
            while (currentNode !== null && count < index) {
                currentNode = currentNode.next;
                count++;
            }
            // 如果索引为 index 的节点不为空, 则返回该节点的数据
            // 如果索引为 index 的节点为空, 则返回 undefined, 表明索引越界
            return currentNode !== null ? currentNode.data : undefined;
        }
    }

    // 3. remove(index) 方法 (删除指定索引的节点)
    remove(index) {
        // 3.1 如果 首节点 为空 或 索引 小于 0, 抛出 RangeError
        if (this[head] === null || index < 0) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
        // 3.2 index 为 0,
        if (index === 0) {
            let data = this[head].data;
            // 令 首节点 指向 下一节点
            this[head] = this[head].next;
            return data;
        }

        // 前一节点 previousNode
        let previousNode = null;
        // 当前节点 currentNode
        let currentNode = this[head];
        // 计数
        let count = 0;
        // 遍历至索引为 index 的节点
        while (currentNode !== null && count < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        if (currentNode !== null) {
            // 前一节点不再指向当前节点, 而是指向当前节点的下一节点 (因为须删除当前节点)
            previousNode.next = currentNode.next;
            // 3.3 返回被删除的当前节点数据
            return currentNode.data;
        }
        // 3.4 抛出 RangeError
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }
    // 4. values() 方法 (返回链表中所有节点数据)
    * values() {
        let current = this[head];

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
    // 返回迭代器实例
    [Symbol.iterator]() {
        return this.values();
    }
}

// CommonJS 规范 导出
exports.linkedList = linkedList;