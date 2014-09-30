/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function findPrimeDivs(num){
var divisors = [];
	for (var i = 2; i <= num; i++){
		while(num % i == 0) { 
			divisors.push(i);
			num = num / i;
		}
	}
	console.log(divisors)



console.log(divisors[divisors.length - 1])
};

/* FIRST SOLUTION
here is a rather longish, naive way of solving the problem. Unfortunately,
it would take years for this method to check all numbers up to 600851475143.

function findPrimeDivs(num){
var divisors = [];
	for (var i = 2; i <= num; i++){
		while(num % i == 0) { 
			divisors.push(i);
			num = num / i;
		}
	}
	console.log(divisors)

var primeDivisors = [];
	for (var j = 0; j < divisors.length; j++) { //main loop, iterates over all numbers in divisors[]
		for (var k = 2; k <= divisors[j]; k++) { //iterate over all divisors of THIS number
			if (divisors[j] % k == 0 && (divisors[j] != k)) { //if k is a divisor of divisor[j] then we go to the next number in the previous for loop
				break;
			}
			else if (divisors[j] == k){ //if we have iterated over all k's to the point that k= divisor[j] then divisor[j] has no divisors and is prime
				primeDivisors.push(k);
			}
		}
		 
	}

console.log(primeDivisors[primeDivisors.length - 1])
};

*/
