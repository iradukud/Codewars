/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

//answer    
function distanceBetweenPoints(a, b) {
    //used formula to return the distance between the 2 points  
    return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
}