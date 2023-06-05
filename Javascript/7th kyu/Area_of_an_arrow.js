/*
DESCRIPTION:
Area of an arrow
An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

Write a function which returns the area of the arrow.

*/

//Solution    
function arrowArea(a, b) {
    //returned the area of the triangle inside the rectangle
    return (b * 0.5 * a) / 2
}