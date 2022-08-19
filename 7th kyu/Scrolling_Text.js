/*
DESCRIPTION:
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

*/

//Solution    
function scrollingText(text) {
    //variable that holds the uppercase of the given text
    const text2 = text.toUpperCase()
    //returned all the possible rotations of the given text
    return Array.from({ length: text.length }, (_, i) => text2.slice(i) + text2.slice(0, i))
}