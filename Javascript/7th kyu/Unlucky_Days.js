/*
DESCRIPTION:
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

//Solution    
const unluckyDays = year => {
    //variable that holds unlucky days
    let unlucky = 0;
    //loops through every month to find unlucky days
    for (x = 0; x < 12; x++) {
        //if the 13 falls on a friday add 1 to unlucky day
        unlucky += new Date(year, x, 13).getDay() === 5
    }
    //return number of unlucky days in the year
    return unlucky
}