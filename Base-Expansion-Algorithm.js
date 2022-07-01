/**
 * Converts a decimal number to another base.
 * @param {*} n The number in base 10
 * @param {*} K The base to convert to.
 * @returns 
 */

let decToBase = (n, K = 2) => {
	let result = [];
	let m = 1;
	while (true) {
		let r = Math.pow(2, m);
		if (r - 1 > n) {
			break;
		}
		m++;
	}
	while (m > 0) {
		result.push(n % K);
		n = Math.floor(n / K);
		m = m - 1;
	}
	return result.reverse().join('');
};

console.log(decToBase(6, 3));