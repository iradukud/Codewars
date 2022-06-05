/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

//answer    
function mygcd(x, y) {
    //loop that returns till x and y are equal
    while (x != y) {
        //if x is greater than y, subtract y from x, then go to the next loop iteration
        if (x > y) {
            x -= y
            //else if y is greater than x, subtract x from y, then go to the next loop iteration
        } else if (y > x) {
            y -= x
        }
    }
    //return the num that x and y both equal
    return x
}