class ListNode {
    constructor(value, next) {
        this.next = next || null;
        this.value = value;
    }

    setNext(node) {
        this.next = node;
    }
}

class LinkedList {
    constructor(arr) {
        arr.reduce((node, value) => {
            const currentNode = new ListNode(value);

            if (!node) {
                this.head = currentNode;
            } else {
                node.setNext(currentNode);
            }

            return currentNode;
        }, null);
    }

    toString() {
        const listPresentation = [];

        for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
            listPresentation.push(currentNode.value);
        }

        return listPresentation.toString();
    }

    reverse() {
        let head;

        for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
            head = Object.assign(currentNode, { prev: head || null })
        }

        this.head = head;

        for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
            currentNode.next = currentNode.prev;
            delete currentNode.prev;
        }
    }
}

const list = new LinkedList(Array.from({length: 5}, (v, i) => i));
