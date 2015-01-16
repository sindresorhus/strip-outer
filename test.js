'use strict';
var test = require('ava');
var stripOuter = require('./');

test(function (t) {
	t.assert(stripOuter('foobarfoo', 'foo') === 'bar');
	t.assert(stripOuter('unicorncake', 'unicorn') === 'cake');
	t.end();
});
