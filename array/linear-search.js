// Source: geeksforgeeks
// Topic: Linear Search
// Space Complexity: O(1)
// Time Complexity: O(n)
function searchInSorted(arr, N, K)
{
    //your code here
    for(let i=0; i<N; i++){
        if(arr[i]==K){
            return 1;
        }
    }
    
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let N = array.length;
let K = 5;
console.log(searchInSorted(array, N, K)); // 1