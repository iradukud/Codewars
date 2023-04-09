/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers
*/

//answer    
var cubeChecker = function (volume, side) {
    //if either the volume or side is equal or less than zero return false
    //return the boolean of the comparision Math.cbrt(volume) and side
    return volume <= 0 || side <= 0 ? false : Math.cbrt(volume) == side
}