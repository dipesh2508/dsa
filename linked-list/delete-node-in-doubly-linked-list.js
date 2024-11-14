function deleteNode(head, x) {
    if (x === 1) {
        if (head.next) {
            head.next.prev = null;
        }
        return head.next;
    }

    let curr = head;
    let count = 1;

    while (curr !== null && count < x) {
        curr = curr.next;
        count++;
    }

    if (curr !== null) {
        if (curr.prev) {
            curr.prev.next = curr.next;
        }
        if (curr.next) {
            curr.next.prev = curr.prev;
        }
    }

    return head;
}

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

//driver code
const head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;

console.log('Original list:');
printList(head);

const newHead = deleteNode(head, 2);
console.log('List after deleting node 2:');
printList(newHead);

function printList(head) {
    let current = head;

    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}