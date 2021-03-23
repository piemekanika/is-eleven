const isNumber = require('is-number');

const ELEVEN = 11;

/**
 * Checks if the given value equals eleven. Works with both
 * numbers and strings.
 *
 * It uses `is-number` library to prevent situations
 * like `Number([11]) === 11`.
 *
 * @example
 * isEleven(0b1011); // true
 * isEleven(' 11'); // true
 * isEleven('11'); // true
 * isEleven(11); // true
 *
 * @example
 * isEleven(12); // false
 * isEleven('12'); // false
 * isEleven([11]); // false
 *
 * @param {number} value - value to check.
 * @returns {boolean} is given value equals 11.
 */
function isEleven(value) {
	if (!isNumber(value)) {
		return false;
	}

	return ELEVEN === Number(value);
};

module.exports.isEleven = isEleven;
