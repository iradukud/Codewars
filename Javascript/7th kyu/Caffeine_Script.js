/*
DESCRIPTION:
Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

caffeineBuzz(1)   => "mocha_missing!"
caffeineBuzz(3)   => "Java"
caffeineBuzz(6)   => "JavaScript"
caffeineBuzz(12)  => "CoffeeScript"
*/

//Solution    
function caffeineBuzz(n) {
    //if n is divisible by 12 return CoffeeScript
    //else if n is divisible by 3 or 12 and 2 return JavaScript
    //else if n is divisible by 3 return Java
    //else return mocha_missing!
    //CoffeeScript placed before JavaScript because solution dedicates
    return n % 12 == 0 ? 'CoffeeScript' : (n % 3 == 0 || n % 12 == 0) && n % 2 == 0 ? 'JavaScript' : n % 3 == 0 ? 'Java' : 'mocha_missing!'
}