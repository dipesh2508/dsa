// brute force

// time complexity: O((n+m)log(n+m))
// space complexity: O(n+m)
findUnion(arr1, arr2, n, m)
{
    for(let i=0; i<n; i++){
       arr2.push(arr1[i]) 
    }
    
    arr2.sort((a,b)=> a-b)
    
    return arr2.filter((item, index) => arr2.indexOf(item) === index);
}

// using hash map
// time complexity: O(n+m)
// space complexity: O(n+m)
findUnion(arr1, arr2, n, m)
    {
        //your code here
        let map = new Map();
        
        for(let i=0; i<n; i++){
            if(map.has(arr1[i])){
                continue;
            } else {
                map.set(arr1[i], 1);
            }
        }
        
        for(let i=0; i<m; i++){
            if(map.has(arr2[i])){
                continue;
            } else {
                map.set(arr2[i], 1);
            }
        }
        
        let arr = []
        
        for(let [key, value] of map){
            arr.push(key)
        }
        
        return arr.sort((a,b)=> a-b);
        
    }

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 6];
let n = arr1.length;
let m = arr2.length;
console.log(findUnion(arr1, arr2, n, m)); // [1, 2, 3, 4, 5, 6]