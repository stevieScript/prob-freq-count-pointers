function makeFreqCounter(arr) {
	const frequencies = {};
	for (const val of arr) {
		frequencies[val] = frequencies[val] + 1 || 1;
	}
	return frequencies;
}

function squares(nums1, nums2) {
	if (nums1.length !== nums2.length) return false;
	const freqCounter1 = makeFreqCounter(nums1);
	const freqCounter2 = makeFreqCounter(nums2);
	for (let key in freqCounter1) {
		if (!(key ** 2 in freqCounter2)) {
			return false;
		}
		if (freqCounter1[key] !== freqCounter2[key ** 2]) {
			return false;
		}
	}
}

function sumZeroNaive(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === 0) {
				return [nums[i], nums[j]];
			}
		}
	}
}

function sumZero(nums) {
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		let sum = nums[left] + nums[right];
		if (sum === 0) {
			return [nums[left], nums[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

