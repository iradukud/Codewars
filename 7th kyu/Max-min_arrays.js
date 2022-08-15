/*
DESCRIPTION:
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!

*/

//Solution    
function solve(arr) {
    //variables the holds the sorted arrays
    const asc = [...arr].sort((a, b) => b - a)
    const des = [...arr].sort((a, b) => a - b)
    //variable that will hold the combined arrs
    const arr2 = []
    //loop that goes the length of arr and places both elements from the sorted arrs into the combined arr
    for (i = 0; i < arr.length; i++) {
        arr2.push(asc[i])
        arr2.push(des[i])
    }
    //returned the final combined arr
    return arr2.slice(0, arr.length)
}