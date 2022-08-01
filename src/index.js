
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const array = [];

  if ( matrix === undefined) return array;

  for (let i = 0; i < matrix.length; i++) {

      for (let k = 0; k < matrix[i].length; k++) {

        let idx = i % 2 === 0 ? k : (matrix[i].length - k - 1);
        array.push(matrix[i][idx]);
        
      }
  }
  return array;
}
