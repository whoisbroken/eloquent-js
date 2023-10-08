// Define a recursive function isEven corresponding to this description.
// The function should accept a single parameter (a positive, whole number)
// and return a Boolean.

// console.log(isEven(50));
// → true
// console.log(isEven(75));
// → false
// console.log(isEven(-1));
// → ??

const isEven = (number) => {
  if (number < 0) return 'negative number'
  if (number === 0) return true;
	else if (number === 1) return false;
	else return isEven(number - 2);
}