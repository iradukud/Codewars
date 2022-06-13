/*
DESCRIPTION:
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

//Solution    
function reverseNumber(n) {
    //reversed the given number then multiplied it by it's sign
    //then returned the product
    return [...('' + Math.abs(n))].reverse().join('') * Math.sign(n)
}