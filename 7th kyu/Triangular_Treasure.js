/*
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/

//answer    
// Return the nth triangular number
function triangular(n) {
    //if n is zero or less return 0  
    if (n <= 0) { return 0 }
    //else return the nth triangular number
    //nth triangular number = sum of numbers between 1 and n then divide the sum by 2
    return ((Math.abs(1 - n) + 1) * (1 + n)) / 2
}