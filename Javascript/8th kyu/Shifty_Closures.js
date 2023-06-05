/*
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/

//answer    
//blockscoped, declaring it with a const, the name variable for each function
var greet_abe = function () {
    const name = 'Abe'
    return "Hello, " + name + '!'
}
var greet_ben = function () {
    const name = 'Ben'
    return "Hello, " + name + '!'
}