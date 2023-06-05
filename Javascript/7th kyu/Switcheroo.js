/*
DESCRIPTION:
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

//Solution    
function switcheroo(x) {
    //turnedthe inputted string into an array and the swapped the a's and b's
    //then return the array back as a string
    return [...x].map(y => y == 'a' ? y = 'b' : y == 'b' ? y = 'a' : y).join('')
}