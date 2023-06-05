/*
DESCRIPTION:
You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.

A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.

Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9

Examples
Valid postcodes:

198328
310003
424000
Invalid postcodes:

056879
12A483
1@63
111

*/

//Solution  
function zipvalidate(postcode) {
    //if the given postcode has less than 6 characters return false
    if (postcode.length != 6) { return false }
    //if the given post with any of the following return false
    if (postcode.startsWith('0') || postcode.startsWith('5') || postcode.startsWith('7') || postcode.startsWith('8') || postcode.startsWith('9')) { return false }
    //else filter out all the none all the none digit and return a boolean based on whether the leftover characters equal 6
    return [...postcode].filter(x => !isNaN(x)).length == 6
}