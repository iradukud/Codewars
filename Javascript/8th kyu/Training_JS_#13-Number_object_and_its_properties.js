/*
Task
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
*/

//answer    
function whatNumberIsIt(n) {
    //function that converts the n to a corresponding string message
    const numberConstant = num => {
        if (Number.isNaN(num)) return 'Number.NaN'
        if (Number.isSafeInteger(num)) return num
        if (num === Number.MAX_VALUE) return 'Number.MAX_VALUE'
        if (num === Number.MIN_VALUE) return 'Number.MIN_VALUE'
        if (num === Number.NEGATIVE_INFINITY) return 'Number.NEGATIVE_INFINITY'
        if (num === Number.POSITIVE_INFINITY) return 'Number.POSITIVE_INFINITY'
    }
    //return the converted string in string message
    return `Input number is ${numberConstant(n)}`
}