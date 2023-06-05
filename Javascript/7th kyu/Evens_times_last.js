/*
DESCRIPTION:
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

//Solution    
function evenLast(numbers) {
    //returned the sum of the even indexs multipled by the last index
    return numbers.reduce((sum, num, ind) => !(ind % 2) ? sum + num : sum + 0, 0) * numbers.slice(-1)[0] || 0
}