/*
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

//answer    
function periodIsLate(last, today, cycleLength) {
    //if the days are greater then the cyle length return true
    //else return false
    return ((today - last) / 1000 / 60 / 60 / 24) > cycleLength
}