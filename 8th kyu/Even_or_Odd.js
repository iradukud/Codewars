/*
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//answer
function even_or_odd(number) {
    //If a number is divisble by two it's even
    if (number % 2 == 0) {
        return 'Even'
    //If a number is not divisble by two it's odd    
    } else {
        return 'Odd'
    }
}