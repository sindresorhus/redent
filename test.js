import test from 'ava';
import m from './';

test(t => {
	t.is(m('\n  foo\n    bar\n', 1), '\n foo\n   bar\n');
	t.is(m('\n foo\n  bar\n', 5, '-'), '\n-----foo\n----- bar\n');
});
