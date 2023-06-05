/*
DESCRIPTION:
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.

*/

//Solution  
function trouble(x, t) {
    //loop that runs the length of x
    for (let i = 0; i < x.length; i++) {
        //if the current value and next value equal t, remove the next value
        if (x[i] + x[i + 1] === t) {
            x.splice(i + 1, 1)
            //and move back to the current value ()
            i--
        }
    }
    //returned the final x/arr
    return x
}