/*
DESCRIPTION:
The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

*/

//Solution  
function stantonMeasure(x) {
    //variabe the holds the frequency of 1 in the given array
    const first = [...x].filter(y => y == 1).length
    //returned the frequency of the above value (frequency of 1 in array) 
    return [...x].filter(y => y == first).length
}