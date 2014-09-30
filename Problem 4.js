/*A palindromic number reads the same both ways. The largest palindrome
 made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.?*/

//Will attempt a more procedural solution in the future

function isPali(num) {
	n = num.toString();
	nr = n.split("").reverse().join("");
	if(n == nr) {
		return true;
	}
	else {
		return false;
	}

}

palindromes = [];
for (var i = 10000; i < 998001; i++) { 
//i is set to the minimum product of two three digit numbers (100x100), and the upper bound
//is set to the maximum product of two three digit numbers (999x999)
	if (isPali(i)) {
		palindromes.push(i);
	}
}
console.log(palindromes[palindromes.length - 1]);
