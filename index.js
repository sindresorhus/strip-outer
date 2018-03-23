'use strict';
const escapeStringRegexp = require('escape-string-regexp');

module.exports = (input, substring) => {
	if (typeof input !== 'string' || typeof substring !== 'string') {
		throw new TypeError('Expected a string');
	}

	substring = escapeStringRegexp(substring);
	return input.replace(new RegExp(`^${substring}|${substring}$`, 'g'), '');
};
