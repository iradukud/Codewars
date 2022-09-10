/*
DESCRIPTION:
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
More examples in the test cases.

Good luck!

*/

//Solution  
function solve(arr) {
    //variable that will hold the dominant array items from the given arr 
    const arr1 = []
    //loop that goes through the given arr
    for (let i = 0; i < arr.length - 1; i++) {
        //variable that holds all the element to the right of the current element and converts them to a boolean based on whether their less than the current element 
        let arr2 = arr.slice(i + 1).map(v => arr[i] > v)
        //if the modified arr2 contains only true element then add the current element to arr1 
        if (arr2.every(v => v === true)) {
            arr1.push(arr[i])
        }
    }
    //add the last element to arr1
    arr1.push(arr[arr.length - 1])
    //returned the final array with all the dominant elements
    return arr1
}