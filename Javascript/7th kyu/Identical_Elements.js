/*
DESCRIPTION:
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

*/

//Solution  
function duplicateElements(m, n) {
    //if any of the given parameters are empty return false
    if (m.length == 0 || n.length == 0) { return false }
    ////variable the holds a string version of the m parameter
    const mString = m.join('')
    //loop that goes through the n parameter
    for (i = 0; i < n.length; i++) {
        //if the current element is included in the string return true
        if (mString.includes(n[i])) {
            return true
        }
    }
    //else return false
    return false
}