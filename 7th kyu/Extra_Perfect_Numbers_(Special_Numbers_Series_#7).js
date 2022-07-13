/*
DESCRIPTION:
Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}
Explanation:
(5)10 = (101)2
First and last bits as set bits.

(7)10 = (111)2
First and last bits as set bits.
*/

//Solution    
function extraPerfect(n) {
    //returned an array the starts from 1 and goes up to by 3 till n/just before n
    return Array.from({ length: Math.ceil(n / 2) }, (_, i) => i * 2 + 1)
}