/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

If you like this Kata, please try:

Last digit symmetry

Alternate capitalization
*/

//answer    
function solve(arr) {
    //list of all the letters in alphabetical order
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    //return an array with the sum of the word characters that match alphabetical order
    return arr.map(word => {
        //keeps count of matches
        let matchCount = 0
        //loops for each character in the word and counts the matches
        for (i = 0; i < word.length; i++) {
            if (alphabet[i] == word[i].toLowerCase()) {
                matchCount++
            }
        }
        //returns the amount of matches for each word
        return matchCount
    })
}