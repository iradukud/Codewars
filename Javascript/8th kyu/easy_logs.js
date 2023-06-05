/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

//answer    
function logs(x, a, b) {
    //return the log sum of a and b with base x
    return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x))
}