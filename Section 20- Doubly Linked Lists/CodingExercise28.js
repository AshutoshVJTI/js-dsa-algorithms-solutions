// DLL shift - Exercise

// Implement the following on the DoublyLinkedList class

// shift

// This function should remove a node at the beginning of the DoublyLinkedList. 
// It should return the node removed.

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(15);
doublyLinkedList.push(10);
doublyLinkedList.push(5);

console.log(doublyLinkedList.shift().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.shift().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.shift().val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.shift()); // undefined
console.log(doublyLinkedList.length); // 0