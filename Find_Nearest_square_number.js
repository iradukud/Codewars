/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
*/

//answer    
function nearestSq(n) {
    //return the neareast square number from n
    //got the square root of n then rounded it and return the square root of the rounded number
    return Math.round(Math.sqrt(n)) ** 2
}