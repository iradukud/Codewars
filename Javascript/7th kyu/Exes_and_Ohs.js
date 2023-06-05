/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//answer    
function XO(str) {
    //make all the characters lowercase (removes case sensitivity)
    const newStr = str.toLowerCase()
    //variables that keep count of x and o in string
    let xCount = 0
    let oCount = 0
    //loop through the string counting the x and o
    for (i = 0; i < newStr.length; i++) {
        if (newStr[i] == 'x') {
            xCount++
        } else if (newStr[i] == 'o') {
            oCount++
        }
    }
    //return a boolean value base on the count of x and o
    return oCount == xCount
}