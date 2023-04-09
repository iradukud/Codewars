/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

//answer    
function parseF(s) {
    //variable that holds the typeof s value
    const inputType = typeof s
    //return the appropriate vale based on the typeof s and value of s
    return inputType == "boolean" ? null : inputType == 'number' ? s : s == 0 ? 0 : parseFloat(s) || null
}