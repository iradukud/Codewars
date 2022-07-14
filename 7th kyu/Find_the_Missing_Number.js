/*
DESCRIPTION:
This question is a variation on the Arithmetic Progression kata

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
*/

//Solution    
function missingNo(nums) {
    //sorted the nums array given then found the first number to not equal it's index
    //then returned this index-1
    return nums.sort((a, b) => a - b).find((x, i) => x != i) - 1
}