function print2largest(arr,n){

    let a=arr[0], b=-1;
    for(let i=0; i<n; i++){
        if(a<arr[i]){
            a = arr[i];
        }
    }
    
    for(let i=0; i<n; i++){
        if(a!==arr[i]){
         if(b<arr[i]){
            b = arr[i];
            }
        }
    }
    
    return b;
}

let arr = [12, 35, 1, 10, 34, 1];
let n = arr.length;
console.log(print2largest(arr, n)); // 34