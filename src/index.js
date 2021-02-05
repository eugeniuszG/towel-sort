// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined ? [] : doTowelSort(matrix)
}

function doTowelSort(matrix){
  const result = [];
  if (matrix === undefined) {
    return result
  }
  for (let index = 0; index < matrix.length; index++) {
    if (index % 2 === 1 ) {
      let tmpReverseArray = matrix[index].reverse();
      for (const item of tmpReverseArray) {
        result.push(item)
      }
    }
    else{
      for (const item of matrix[index]) {
        result.push(item);
      }
    }
  }
  console.log(result);
  return  result;
}

