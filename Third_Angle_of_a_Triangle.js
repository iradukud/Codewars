/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/

//answer
//triangles inner angles always amount to 180, so to find third angle minus the know angles from 180 
const otherAngle = (a, b) => 180-a-b 