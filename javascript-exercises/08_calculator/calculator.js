const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let result = 0;
  for (const n of array) {
    result += n;
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for (const n of array) {
    result *= n;
  }
  return result;;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
  let result = 1;
	for (i=n;i>=2;i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
