'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str) {
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        let b = str[i].split('');
        b[0] = b[0].toUpperCase();
        b = b.join('');
        str[i] = b;
    }
    return str.join(' ');
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('how are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('azerty or qwerty ?'), 'Azerty Or Qwerty ?')
assert.strictEqual(jadenCase('tu es un sorcier harry !'), 'Tu Es Un Sorcier Harry !')

/* assert.fail('You must write your own tests')
End of tests */
