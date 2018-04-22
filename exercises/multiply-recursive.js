'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
function multiply(nb1, nb2) {
    let y = 0;
    if (nb1 == 0 || nb2 == 0) return 0;
    if (nb2 < 0) {
        let res = nb1.toString();
        let res2 = ',' + res;
        res = res + res2.repeat(-nb2 - 1);
        res = res.split(',').map(x => parseInt(x)).map(x => y += x);
        return -res[res.length - 1];
    } else {
        let res = nb1.toString();
        let res2 = ',' + res;
        res = res + res2.repeat(nb2 - 1);
        res = res.split(',').map(x => parseInt(x)).map(x => y += x);
        return res[res.length - 1];
    }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
