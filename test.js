import test from 'ava';
import m from '.';

test('main', t => {
	t.is(m('foobarfoo', 'foo'), 'bar');
	t.is(m('unicorncake', 'unicorn'), 'cake');
});
