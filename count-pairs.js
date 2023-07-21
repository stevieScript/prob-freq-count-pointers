// add whatever parameters you deem necessary
// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.
function countPairs(arr, num) {
	arr.sort((a, b) => a - b);
	let count = 0;
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === num) {
			count++;
			left++;
			right--;
		} else if (sum < num) {
			left++;
		} else {
			right--;
		}
	}
	return count;
}
module.exports = countPairs;

