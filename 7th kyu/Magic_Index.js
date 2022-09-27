/*
DESCRIPTION:
A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

findMagic([-20,-10,2,10,20]); // Returns 2

*/

//Solution  
function findMagic(arr) {
    return arr.sort((a, b) => a - b).find((x, i) => x == i) || -1
}