function insertAtEnd(head, x) {
  const newNode = new Node(x);

  if (head === null) {
    return newNode;
  }

  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;

  return head;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//driver code
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function printList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

const newHead = insertAtEnd(head, 5);
printList(newHead);
