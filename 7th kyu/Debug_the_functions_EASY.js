/*
DESCRIPTION:
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

*/

//Solution  
function multi(arr) {
    return arr.reduce((prod, num) => prod * num, 1);
}
function add(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function reverse(str) {
    return [...str].reverse().join('');
}