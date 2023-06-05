/*
DESCRIPTION:
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

//Solution    
function sumOfIntegersInString(s) {
    //variable that holds the array of s, with the characters as elements
    let arr = [...s]
    //loop that turns non number characters into empty elements
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) != arr[i]) {
            arr[i] = " "
        }
    }
    //combined the array to remove all the empty elements and join the adjacent number characters 
    //then split it an to create an array
    //reduced the arr to the sum of it's element
    return arr.join("").split(" ").reduce((acc, curr) => acc + +curr, 0)
}