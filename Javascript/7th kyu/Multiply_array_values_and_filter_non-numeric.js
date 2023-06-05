/*
DESCRIPTION:
Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

*/

//Solution  
function multiplyAndFilter(array, multiplier) {
    //returned an array of numbers with each element begin multipled by multiplier
    return array.filter(x => typeof x == 'number').map(x => x * multiplier)
}