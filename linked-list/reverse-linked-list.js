// time complexity: O(n)
// space complexity: O(1)
var reverseList = function(head) {
    
    let prev = null;
    let curr = head;

    while(curr !== null){
        let next = curr.next;

        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
};

//driver code
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log("Original list:");
printList(head);

const newHead = reverseList(head);
console.log("List after reversing:");
printList(newHead);

function printList(head) {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}
