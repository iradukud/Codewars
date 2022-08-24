/*
DESCRIPTION:
Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

Note:

Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
If no number was given in the string, it should return 0
Example:

str = "In 2015, I want to know how much does iPhone 6+ cost?"
The numbers are 2015, 6

Sum is 2021.

*/

//Solution    
function sumFromString(str) {
    //variable that will hold the number from the given str in an array
    const arr = []
    //variable that holds the current number
    let curr = ''
    //loop the goes through the given str
    for (i = 0; i < str.length; i++) {
        //if the current character is a number place it in the current
        if (!isNaN(str[i])) {
            curr += str[i]
            //if it's not then send the current number to the array  
        } else if (curr.length > 0) {
            arr.push(curr)
            curr = ''
        }
        //if the last charter is a number the push it to the arr
        if (curr.length > 0 && i == str.length - 1) {
            arr.push(str[i])
        }
    }
    //returned the sum of the numbers in the array
    return arr.reduce((sum, num) => sum + +num, 0)
}