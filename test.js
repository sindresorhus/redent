import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('\n  foo\n    bar\n', 1), '\n foo\n   bar\n');
	t.is(fn('\n foo\n  bar\n', 5, '-'), '\n-----foo\n----- bar\n');
});
