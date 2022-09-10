/*
DESCRIPTION:
A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

*/

//Solution  
function dominator(arr) {
    //created an empty object 
    const obj = {}
    //placed object arr items as keys and kept frequency count
    arr.map(v => obj[v] = obj[v] ? obj[v] + 1 : 1)
    //varible that holds an array of the obj keys
    const keys = Object.keys(obj)
    //varible that holds an array of the obj values
    const value = Object.values(obj)
    //if the max value from obj isn't greater than half the length of arr return -1
    if (Math.max(...value) < arr.length / 2) return -1
    //else return the num with the highest frequency
    return value.indexOf(Math.max(...value)) === 0 ? -1 : keys[value.indexOf(Math.max(...value))] * 1;
}