/*
DESCRIPTION:
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

*/

//Solution    
function consecutive(arr) {
    //variables that hold the min and max values of the given array
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    //return the numbers needed to make the arr a consective sequence
    return Array.from({ length: max - min + 1 }).length - arr.length
}