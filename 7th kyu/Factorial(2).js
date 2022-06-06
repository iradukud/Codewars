/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

//answer    
function factorial(n) {
    //if n is 0 return 1 
    if (n == 0) { return 1 }
    //else create an array from n and reduce its element's to a product 
    //returned that product
    return Array.from({ length: n }, (_, i) => i + 1).reduce((prod, num) => prod * num)
}