/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
*/

//answer    
function slope(points) {
    //if the denominator equals 0 return undefined
    //else if numerator equals 0 return 0
    //return the string of the slope
    return (points[0] - points[2]) == 0 ? 'undefined' : (points[1] - points[3]) == 0 ? '0' : `${(points[1] - points[3]) / (points[0] - points[2])}`
}