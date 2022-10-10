/*
DESCRIPTION:
Create a function that will return true if the input is in the following date time format 01-09-2016 01:20 and false if it is not.

This Kata has been inspired by the Regular Expressions chapter from the book Eloquent JavaScript.

*/

//Solution  
function dateChecker(date) {
    const arr = date.split('-')
    if (arr.length != 3 || arr[0].length != 2 || arr[1].length != 2 || arr[2].length != 10) {
        return false
    }
    const ar = date.split(':')
    if (ar.length != 2) {
        return false
    }
    return true
}