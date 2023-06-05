/*
DESCRIPTION:
A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!

How many kookaburras are there?

Hint
The trick to counting kookaburras is to listen carefully

The males sound like HaHaHa...

The females sound like hahaha...

And they always alternate male/female

Examples
ha = female => 1
Ha = male => 1
Haha = male + female => 2
haHa = female + male => 2
hahahahaha = female => 1
hahahahahaHaHaHa = female + male => 2
HaHaHahahaHaHa = male + female + male => 3

*/

//Solution  
var kookaCounter = function (laughing) {
    //variable that keeps count of the kookaburras
    let count = 0
    //variable the holds the first laughing sound 
    let start = laughing.slice(0, 3)
    for (i = 0; i < laughing.length; i += 2) {
        //if the current laugh does not match the previous add to count and change the current laugh 
        if (start != laughing.slice(i, i + 2)) {
            count++
            start = laughing.slice(i, i + 2)
        }
    }
    //returned the kookaburras count
    return count
}