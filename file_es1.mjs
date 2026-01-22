// common JS to ESM
import { a } from './file_es2.mjs';
import { a as b } from './file_es3.mjs';
import utils from './utils_esm/index.mjs'

console.log(utils.add(a, b));
console.log(utils.biyog(b, a));
console.log(a, b)
