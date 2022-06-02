/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/

//answer    
function solution(digits) {
    //variable that holds the value of the largest 5 digit string value
    let largestDigits = 0
    //loop that goes through the given number
    for (i = 0; i <= digits.length - 5; i++) {
        //creates a number with 5 digits 
        let Seqsum = digits.slice(i, i + 5)
        //if that number is greater than our current five digits, replace the old one
        if (Seqsum > largestDigits) {
            largestDigits = Seqsum
        }
    }
    //return the 5 largest digits
    return +largestDigits
}