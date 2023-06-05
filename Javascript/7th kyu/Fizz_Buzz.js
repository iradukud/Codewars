/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

//answer    
function fizzbuzz(n) {
    //created an array which goes from 1 to n 
    //change the elements divible by 3 and/or 5 to their string counterparts
    //the return the final array
    return Array.from({ length: n }, (_, x) => (x + 1) % 15 == 0 ? 'FizzBuzz' : (x + 1) % 3 == 0 ? 'Fizz' : (x + 1) % 5 == 0 ? 'Buzz' : x + 1)
}