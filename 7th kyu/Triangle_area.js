/*
DESCRIPTION:
Task.

Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

Hints

Ignore dots.

All triangles will be right isoceles.

Example:

.
.      .  
.      .       .      ---> should return 2.0

.
.      .  
.      .       .     
.      .       .      .      ---> should return 4.5

*/

//Solution  
function tArea(tStr) {
    const arr = tStr.split('\n').slice(1, -1)
    const h = arr.length - 1
    const b = arr.pop().length - 1
    console.log(h, b)
    return h * b / 4
}
