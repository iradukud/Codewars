/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta
*/

//answer    
function position(letter) {
    //created an array with the alphabets as it's elements (in alphabetical order) then found the position of letter in the array(+1)
    //then return it in a string message
    return `Position of alphabet: ${[...Array(26)].map((_, i) => String.fromCharCode(65 + i).toLowerCase()).indexOf(letter) + 1}`
}