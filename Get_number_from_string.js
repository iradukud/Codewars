/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

//answer    
function getNumberFromString(s) {
    //turned the string into a array then filtered out all the non-numbers
    //then converted the string to a number and returned it
    return +([...s].filter(x => +x >= 0 && x != ' ').join(''))
}