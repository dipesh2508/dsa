// Time complexity: O(1)
// Space complexity: O(1)
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next;
};

//driver code
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new Node(4);
head.next = new Node(5);
head.next.next = new Node(1);
head.next.next.next = new Node(9);


deleteNode(head.next);
printList(head);

function printList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
