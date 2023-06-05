/*
DESCRIPTION:
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

//Solution    
function spacify(str) {
    //split the string in an array of it's character and joined them back with a space separation and return it as a string
    return [...str].join(' ')
}