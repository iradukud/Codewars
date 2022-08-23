/*
DESCRIPTION:
Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.

Examples
5   =>  7
12  =>  13

*/

//Solution    
function nextPrime(n) {
    //variable that keeps the count/current position
    let count = 0
    //loop that goes till the next prime is found
    for (i = n + 1; i > 0; i++) {
        if (isPrime(i)) { count = i; break }
    }
    //returns the next prime
    return count
}

function isPrime(n) {
    //variable that hold the square root of n
    let rt = Math.sqrt(n)
    //loop that runs till rt
    for (let i = 2; i <= rt; i++) {
        //if the passed n is divisble by i return false
        if (n % i === 0) { return false }
    }
    //else return true as long as n is not 1
    return n !== 1
}