const add = function(x, y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(el => {
    sum+=el;
  });
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
	arr.forEach(el => {
    mul*=el;
  });
  return mul;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(n) {
  if(n === 0 || n === 1) return 1;

  return (n * factorial(n-1));
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
