import test from 'ava';
import redent from '.';

test('main', t => {
	t.is(redent('\n  foo\n    bar\n', 1), '\n foo\n   bar\n');
	t.is(redent('\n foo\n  bar\n', 5, {indent: '-'}), '\n-----foo\n----- bar\n');
	t.is(redent('\n foo\n  bar\n', 5, {indent: '-', includeEmptyLines: true}), '-----\n-----foo\n----- bar\n-----');
});
