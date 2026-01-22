// common JS to ESM
// const { a } = require('./file2');
import { a } from './file_es2.mjs';

// const { a: b } = require('./file3');
import { a as b } from './file_es3.mjs';

// const { add } = require('./utils/add');
// const { subs } = require('./utils/subs');

// const { add, subs } = require('./utils');

// console.log(a, b);

// console.log(add(a, b));
// console.log(subs(b, a));


console.log(a, b)
