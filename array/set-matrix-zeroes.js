// Space Complexity O(m+n)
// Time Complexity O(m*n)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length];
  let row = new Array(m).fill(0);
  let col = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] == 1 || col[j] == 1) {
        matrix[i][j] = 0;
      }
    }
  }
};

// Space Optimization
// Time Complexity O(m*n)
// Space Complexity O(1)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const [n, m] = [matrix.length, matrix[0].length];
  let col0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;

        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] !== 0) {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  if (col0 == 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
};


//driver code
let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
setZeroes(matrix)
console.log(matrix) // [[1,0,1],[0,0,0],[1,0,1]]