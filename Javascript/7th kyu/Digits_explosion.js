/*
DESCRIPTION:
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/

//Solution    
function explode(s) {
    //turned the string into an arr
    //then for each elements repeated the element element-times and joined the element to create a string
    //return this string
    return [...s].map(x => x.repeat(x)).join('')
}