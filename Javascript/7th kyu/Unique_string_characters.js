/*
DESCRIPTION:
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!
*/

//Solution    
function solve(a, b) {
    //variable that holds the unique string characters  
    const arr = []
    //loop through the a string and place characters that did not appear in b into the variable
    for (i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            arr.push(a[i])
        }
    }
    //loop through the b string and place characters that did not appear in A into the variable
    for (i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            arr.push(b[i])
        }
    }
    //returned the final string of all the unique characters  
    return arr.join('')
}