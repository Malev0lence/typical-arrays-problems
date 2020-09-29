
exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  }

  array = array.sort((a, b) => {
    return a - b;
  });
  
  return array[0];
}

exports.max = function max (array) {
  if (!array || !array.length) {
    return 0;
  }

  array = array.sort((a, b) => {
    return b - a;
  });
  
  return array[0];
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  }

  let sumOfArgs = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  let average = sumOfArgs / array.length;
  return average;

}
