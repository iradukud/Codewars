/*
DESCRIPTION:
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.

*/

//Solution    
var FilterNumbers = function (str) {
    //added condition to filter out 0 too
    return str.split('').filter(c => !parseInt(c) && c != '0').join('');
}