/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.
*/

//answer    
function circleCircumference(circle) {
    //calculated the circumference of the circle using the circle object's radius  
    return Math.PI * 2 * circle.radius
}