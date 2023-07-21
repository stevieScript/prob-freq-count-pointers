// add whatever parameters you deem necessary
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
function makeFreqCounter(arr) {
	const frequencies = {};
	for (const val of arr) {
		frequencies[val] = frequencies[val] + 1 || 1;
	}
	return frequencies;
}

function constructNote(message, letters) {
	if (message.length > letters.length) return false;
	const messageFreqCounter = makeFreqCounter(message);
	const lettersFreqCounter = makeFreqCounter(letters);
	for (let key in messageFreqCounter) {
		if (!(key in lettersFreqCounter)) {
			return false;
		}
		if (messageFreqCounter[key] > lettersFreqCounter[key]) {
			return false;
		}
	}
	return true;
}

module.exports = constructNote;

