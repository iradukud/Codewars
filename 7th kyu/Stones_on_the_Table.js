/*
DESCRIPTION:
There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9

*/

//Solution    
function solve(stones) {
    //variable that keeps count of the strings to be removed
    let count = 0
    //loop that goes throught the whole string
    for (i = 0; i < stones.length; i++) {
        //if the adjacent values are similar add 1 to the count
        if (stones[i] == stones[1 + i]) { count++ }
    }
    //returned the final count
    return count
}