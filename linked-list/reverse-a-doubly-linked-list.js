function reverseDLL(head) {
  // code here
  if (head.next == null) {
    return head;
  }

  let prev = null;
  let temp = head;

  while (temp) {
    let next = temp.next;
    temp.prev = temp.next;

    temp.next = prev;
    prev = temp;
    temp = next;
  }

  return prev;
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

console.log("Original list:");
printList(head);

const newHead = reverseDLL(head);
console.log("List after reversing:");
printList(newHead);

function printList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
