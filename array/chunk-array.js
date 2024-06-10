
function chunk(arr, size) {
  let chunk = [];

  for(let i=0; i<arr.length; i=i+size){
    let temp = [];
    let iter = arr.length - i;
    if(size<=iter){
        iter = size;
    }
    for(let j=i; j<i+iter; j++){
        temp.push(arr[j])
    }
    chunk.push(temp)
  }

  return chunk;  
};

let arr = [1,2,3,4,5,6,7,8,9,10];
let size = 3;
console.log(chunk(arr, size)) // [[1,2,3],[4,5,6],[7,8,9],[10]]
size = 2;
console.log(chunk(arr, size)) // [[1,2],[3,4],[5,6],[7,8],[9,10]]