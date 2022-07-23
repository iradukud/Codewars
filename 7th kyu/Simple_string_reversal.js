/*
DESCRIPTION:
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!
*/

//Solution    
function solve(str) {
    //variable that holds the string which will be returned   
    let s = ""
    //loop that goes through the give string backwards
    for (i = str.length - 1; i >= 0; i--) {
        //if the current character is not a white space add it to the string
        if (str[i] != ' ') { s += str[i] }
        //if the current position of the original string has a white space add it to the new string
        if (str[s.length] == ' ') { s += ' ' }
    }
    //returuned the reversed string
    return s
}