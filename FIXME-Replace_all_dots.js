/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

//answer    
var replaceDots = function (str) {
    //replaced all the dots with a dash
    return str.replace(/[.]/g, '-');
}