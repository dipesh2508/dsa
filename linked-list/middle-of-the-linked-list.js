
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let p1 = head;
    let p2 = head;

    while(p2 !== null && p2.next !== null){
        p1 = p1.next;
        p2 = p2.next.next;
    }

    return p1;
};

//driver code
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log("Original list:");
printList(head);

const middle = middleNode(head);
console.log("Middle node:");
console.log(middle.val);

function printList(head) {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}
