/*
DESCRIPTION:
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
*/

//Solution    
function average(scores) {
    //returned the average of the scores round to the neareast whole number
    return Math.round(scores.reduce((sum, num) => sum + num) / scores.length)
}