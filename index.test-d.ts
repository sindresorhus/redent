import {expectType} from 'tsd';
import redent from './index.js';

expectType<string>(redent('\n  foo\n    bar\n'));
expectType<string>(redent('\n  foo\n    bar\n', 1));
expectType<string>(redent('\n  foo\n    bar\n', 1, {indent: ' '}));
expectType<string>(redent('\n  foo\n    bar\n', 1, {includeEmptyLines: true}));
