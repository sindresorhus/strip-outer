import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('foobarfoo', 'foo'), 'bar');
	t.is(fn('unicorncake', 'unicorn'), 'cake');
});
