/*
    Simple, remove the spaces from the string, then return the resultant string.
*/

//answer
function noSpace(x) {
    //split method used to split all the invidual characters and words, then joining them back without spaces 
    return x.split(' ').join('')
}