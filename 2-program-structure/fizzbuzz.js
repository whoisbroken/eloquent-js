// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
// (and not 3), print "Buzz" instead.

const fizzbuzz = () => {
	for (let n = 1; n <= 100; n++) {
		let output = '';

		if (n % 3 === 0) output += 'Fizz';
		if (n % 5 === 0) output += 'Buzz';
        
		console.log(output || n);
	}
}

fizzbuzz()