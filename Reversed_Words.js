/*
    Complete the solution so that it reverses all of the words within the string passed in.

    Example:

    "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

//answer
function reverseWords(str) {
    //splits the string into a words and reverses the word and joins them back together maintaining
    //with a space between the words
    return str.split(' ').reverse().join(' ')
}