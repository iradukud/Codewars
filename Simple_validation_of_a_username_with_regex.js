/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

//answer    
const validateUsr = (username) => {
    //regex cheat code
    return username.length >= 4
        && username.length <= 16
        && (username.match(/[a-z]|_|\d/g).length === username.length);
}