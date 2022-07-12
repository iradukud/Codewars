/*
DESCRIPTION:
Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.
*/

//Solution    
function longest(words) {
    //return the length of longest word in the words array 
    return Math.max(...words.map(x => x.length))
}