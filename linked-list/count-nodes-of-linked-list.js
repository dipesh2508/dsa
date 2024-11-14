//time complexity: O(n)
//space complexity: O(1)

function getCount(head) {
    // Code here
    let count=1;
    
    while(head.next !== null){
        count++;
        head = head.next;
    }
    
    return count;
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

console.log(getCount(head)); // 3