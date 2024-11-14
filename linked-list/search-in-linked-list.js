// time complexity: O(n)
// space complexity: O(1)
function searchKey(n, head, key) {
    // Code here
    for(let i=0; i<n; i++){
        if(head.data === key){
            return 1;
        }
        
        head = head.next;
    }
    
    return 0;
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

console.log(searchKey(3, head, 2)); // 1