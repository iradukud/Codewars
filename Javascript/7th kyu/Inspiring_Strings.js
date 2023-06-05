/*
DESCRIPTION:
When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold

*/

//Solution    
function longestWord(stringOfWords) {
    //returned the longest word from the given string
    return stringOfWords.split(' ').reduce((bigWord, currWord) => currWord.length >= bigWord.length ? bigWord = currWord : bigWord)
}