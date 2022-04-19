/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

//answer    
function solve(s) {
    //created variables that hold the count for the character category
    let numbers = s.split('').filter(x => !isNaN(x)).length
    let special = s.split('').filter(x => x.toUpperCase() == x.toLowerCase() && isNaN(x)).length
    //used the numbers and special to help determine the uppercase and lowercase count
    let upper = s.split('').filter(x => x == x.toUpperCase()).length - numbers - special
    let lower = s.split('').filter(x => x == x.toLowerCase()).length - numbers - special
    //returned an array with the corresponding character category
    return [upper, lower, numbers, special]
}
