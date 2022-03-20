/*
    Clock shows h hours, m minutes and s seconds after midnight.

    Your task is to write a function which returns the time since midnight in milliseconds.

    Example:
    h = 0
    m = 1
    s = 1

    result = 61000
    Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

//answer
function past(h, m, s) {
    //since any time after midnight is greater than 0 we can just convert every hours,minutes
    //and seconds into milliseconds and add them up
    return h * 3.6e+6 + m * 60000 + s * 1000
}