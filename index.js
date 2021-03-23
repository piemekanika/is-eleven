const isNumber = require('is-number');

/**
 * Checks if the given value equals eleven.
 *
 * @param {number} value to check.
 * @returns {boolean} is given value equals 11.
 */
function isEleven(value) {
	if (!isNumber(value)) {
		return false;
	}

	return 11 === Number(value);
};

module.exports.isEleven = isEleven;
