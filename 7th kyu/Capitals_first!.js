/*
DESCRIPTION:
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

*/

//Solution  
function capitalsFirst(str) {
    //returned the string with the capitalized words appearing first then the non captalized words appearing after, everything is in the order it appears
    return str.split(' ').filter(x => x[0] == x[0].toUpperCase() && 'abcdefghijklmnopqrstuvwxyz'.includes(x[0].toLowerCase())).concat(str.split(' ').filter(x => x[0] == x[0].toLowerCase() && 'abcdefghijklmnopqrstuvwxyz'.includes(x[0].toLowerCase()))).join(' ')
}