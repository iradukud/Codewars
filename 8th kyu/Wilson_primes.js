/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

//answer  
//The only known Wilson primes are 5, 13, and 563 (Wiki)  
const amIWilson = (p) => p==5 || p==13 || p==563