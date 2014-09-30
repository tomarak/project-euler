/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

array = [];

for(var i = 1; i <=1000; i++) {
	if((i % 3 == 0) || (i % 5 == 0)) {
		array.push(i);
	}
}

console.log(array);
var total = 0;

for(var j = 0; j < array.length; j++) {
	total += array[j];
}

console.log(total);
