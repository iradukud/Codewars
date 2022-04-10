/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

//answer    
function between(a, b) {
    //empty array
    let betweenRage = []
    //loop that holds the numbers in between a and b (including a and b)
    for (i = a; i <= b; i++) {
        betweenRage.push(i)
    }
    //returns the array
    return betweenRage
}
