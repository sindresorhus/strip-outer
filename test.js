import test from 'ava';
import m from './';

test(t => {
	t.is(m('foobarfoo', 'foo'), 'bar');
	t.is(m('unicorncake', 'unicorn'), 'cake');
});
