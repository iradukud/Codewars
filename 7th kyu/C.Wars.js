/*
DESCRIPTION:
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

*/

//Solution    
function initials(n) {
    //returned the final string with the first and middle names intialized
    return n.split(' ').map((x, i, arr) => i == arr.length - 1 ? x[0].toUpperCase() + x.slice(1) : x[0].toUpperCase() + '.').join('')
}