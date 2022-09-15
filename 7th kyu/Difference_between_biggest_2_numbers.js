/*
DESCRIPTION:
You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

    diffBig2([10, 5, 2]);
In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

You can assume that the input array has 2 or more elements.

The input array has the sort method disabled, so you will have to solve it in another way.

*/

//Solution  
function diffBig2(arr) {
    //variable that holds the first max value
    let n = Math.max(...arr)
    //removed said max value
    arr.splice(arr.indexOf(n), 1)
    //then return the difference between the original max and the new max
    return n - Math.max(...arr)
}