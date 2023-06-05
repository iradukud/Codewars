/*
DESCRIPTION:
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.
*/

//Solution    
function palindrome(num) {
    //if the given num if it's a string or less than zero return a corresponding string message
    if (typeof num == 'string' || num < 0) { return 'Not valid' }
    //else returned a boolean based on whether the reverse of num equals num 
    return +[...(num + '')].reverse().join('') == num
} 