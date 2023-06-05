/*
DESCRIPTION:
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

//Solution    
function disariumNumber(n) {
    //compared the sum of the given digits powered with their respective positions to the number itself
    //and return the corresponding string 
    return [...(n + '')].reduce((sum, num, index) => sum + num ** (index + 1), 0) == n ? 'Disarium !!' : 'Not !!'
}