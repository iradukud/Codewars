/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

//answer
//reduce each array to it's sum and then return the sum of both arrays
const arrayPlusArray = (arr1, arr2) => arr1.reduce((sum, number) => sum + number) + arr2.reduce((sum, number) => sum + number)