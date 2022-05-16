/*
Task
Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/

//answer    
function padIt(str, n) {
    //variable that holds the string to be manipulated
    let strPad = str
    //variable the operates as the while loop counter
    let num = 1
    //variable that keeps out of the total string length for padding to work 
    let lengthString = str.length + 1
    //while loop that places the padding on the string
    while (num <= n) {
        if (num % 2) {
            console.log('odd')
            strPad = strPad.padStart(lengthString, '*')
            num++
            lengthString++
        } else {
            console.log('even')
            strPad = strPad.padEnd(lengthString, '*')
            num++
            lengthString++
        }
    }
    //return the padded string
    return strPad
}