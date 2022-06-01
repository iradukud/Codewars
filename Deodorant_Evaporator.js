/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/

//answer    
function evaporator(content, evap_per_day, threshold) {
    //variable that keeps count of the day's gone before the evaporator is unusable
    let nthDay = 0
    //percentage of content
    //we assume 100 percent because that's where we'll start (unless other info given)
    let percentage = 100
    //loop that runs till the threshold is greater than percentage
    while (percentage > threshold) {
        percentage = percentage - percentage * (evap_per_day / 100)
        nthDay += 1
    }
    //return the days need to empty the evaporator
    return nthDay
}