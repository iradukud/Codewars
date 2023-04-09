/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

//answer    
String.prototype.digit = function () {
    //made it work without regex
    //need to find a way to handle multiple character blank string
    return this == ' ' ? false : !isNaN(this.trim()) && this >= 0 && this <= 9 && this.length == 1
}