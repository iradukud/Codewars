/*
DESCRIPTION:
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

//Solution    
function sevenAte9(str) {
    //returned a string with all the lone 9s between removed from the original 
    return str.replace(/79(?=7)/g, '7')
}