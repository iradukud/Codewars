/*
DESCRIPTION:
This is a follow up from my kata The old switcheroo

Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()

*/

//Solution  
function encode(str) {
    //variablel that holds all the letters
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //returned a new string with the letters swapped for their repective position
    return [...str.toUpperCase()].map(x => letters.includes(x) ? letters.indexOf(x) + 1 : x).join('')
}