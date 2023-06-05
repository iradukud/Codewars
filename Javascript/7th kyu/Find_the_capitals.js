/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

//answer    
var capitals = function (word) {
    //created an array from the word then modified the array to show the index position of all the capital letters
    //then filter all the none capital letters and return the position of all the capitals in the string 
    return word.split('').map((x, i) => x == x.toUpperCase() ? i : -1).filter(x => x >= 0)
}