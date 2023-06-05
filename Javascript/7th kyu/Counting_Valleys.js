/*
DESCRIPTION:
You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN
To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/
So here we passed one valley

*/

//Solution  
function countingValleys(s) {
    //variable that keeps count of the valleys
    let val = 0
    //variable that keeps count of the altitude
    let all = 0
    //loop that goes through the whole string
    for (i = 0; i < s.length; i++) {
        //if D, decrement the all
        if (s[i] == 'D') {
            all--
            //else if U, increment the all
        } else if (s[i] == 'U') {
            //if all if -1 add to the val count
            if (all == -1) { val++ }
            all++
        }
    }
    //return final val count
    return val
}