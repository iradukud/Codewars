/*
DESCRIPTION:
Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
The reverse function should NOT modify the original string.

*/

//Solution    
String.prototype.reverse = function reverse() {
    //returned a reversed string
    return this.split('').reverse().join('')
}