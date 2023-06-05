/*
DESCRIPTION:
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/

//Solution    
function repeats(arr) {
    //variable that holds the sum of only the unique elements
    let sum = 0
    //loop that goes throught the whole array
    for (i = 0; i < arr.length; i++) {
        //if the element is unique add it to the sum
        if (arr.filter(x => x == arr[i]).length == 1) {
            sum += arr[i]
        }
    }
    //return the final sum
    return sum
}