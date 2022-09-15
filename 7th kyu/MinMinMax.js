/*
DESCRIPTION:
Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

You solution should return an array [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with the lowest value.

The largest integer should be the integer from the array with the highest value.

The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

*/

//Solution  
function minMinMax(array) {
    //variable that holds the max value from the array
    const max = Math.max(...array)
    //variable that holds the min value from the array
    const min = Math.min(...array)
    //variable that will hold minimum value between the max and min that isn't included in the array
    let mA = 0
    //loop that starts from the min and goes till the max 
    for (i = min + 1; i < max; i++) {
        //if the i value is not in the array, save the value and end the loop
        if (!array.includes(i)) {
            mA = i
            break
        }
    }
    //returned an array with the [min,mA,max] values  
    return [min, mA, max]
}