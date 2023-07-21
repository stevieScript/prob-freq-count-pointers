// add whatever parameters you deem necessary
function makeFreqCounter(arr) {
	const frequencies = {};
	for (const val of arr) {
		frequencies[val] = frequencies[val] + 1 || 1;
	}
	return frequencies;
}

function sameFrequency(num1, num2) {
	const num1Str = num1.toString();
	const num2Str = num2.toString();
	if (num1Str.length !== num2Str.length) return false;
	const num1Freq = makeFreqCounter(num1Str);
	const num2Freq = makeFreqCounter(num2Str);
	for (const key in num1Freq) {
		if (num1Freq[key] !== num2Freq[key]) return false;
	}
	return true;
}

module.exports = sameFrequency;
