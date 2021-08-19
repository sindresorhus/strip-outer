import test from 'ava';
import stripOuter from './index.js';

test('main', t => {
	t.is(stripOuter('foobarfoo', 'foo'), 'bar');
	t.is(stripOuter('unicorncake', 'unicorn'), 'cake');
	t.is(stripOuter('unicorncake', 'cake'), 'unicorn');
});
