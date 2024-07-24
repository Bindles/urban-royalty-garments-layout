// 1380. Lucky Numbers in a Matrix
matrix = [[3,7,8],[9,11,13],[15,16,17]]

// js manual tranpose
const maxInColz = matrix[0].map((_, colIndex) => Math.max(...matrix.map(row => row[colIndex])));

// EXAMPLES
// 1 short
function luckyNumbers(matrix) {
  return [...new Set(matrix.map(row => Math.min(...row)))]
      .filter(value => new Set(matrix[0].map((_, colIndex) => Math.max(...matrix.map(row => row[colIndex])))).has(value));
};
console.log(luckyNumbers(matrix));
// 2 long
function luckyNumbers2(matrix) {
  // Transpose the matrix and find the maximum in each column
  const maxInCol = matrix[0].map((_, colIndex) => Math.max(...matrix.map(row => row[colIndex])));
  console.log(maxInCol);

  // Find the minimum in each row
  const minInRow = matrix.map(row => Math.min(...row));
  console.log(minInRow);

  // Find the intersection of the two arrays
  const result = minInRow.filter(value => maxInCol.includes(value));
  return result;
}

matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
];

console.log(luckyNumbers2(matrix));




