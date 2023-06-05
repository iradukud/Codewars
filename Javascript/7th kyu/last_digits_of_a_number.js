/*
DESCRIPTION:
Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]

*/

//Solution    
function lastDigit(n, d) {
    //if the d is equal to zero or less than return an empty array 
    if (d <= 0) { return [] }
    //if the d is greater than the length the given digits return all the digits in a array
    if (d > ('' + n).length) { return ('' + n).split('').map(x => +x) }
    //else return the array of the d last digits
    return (n + '').split('').slice(-d).map(x => +x)
}