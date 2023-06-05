/*
DESCRIPTION:
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
s∗(s−a)∗(s−b)∗(s−c)
​
 
where

s=a+b+c2s = \frac{a + b + c} 2s= 
2
a+b+c
​
 
Output should have 2 digits precision.
*/

//Solution    
function heron(a, b, c) {
    //calulate the s value needed for Heron's formula
    const s = (a + b + c) / 2
    //returned the solution to Heron's formula
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}