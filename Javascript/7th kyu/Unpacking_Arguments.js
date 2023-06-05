/*
DESCRIPTION:
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")
*/

//Solution    
function spread(func, args) {
    //used the spread operator to input multiple arguments into on the function (creates an array)
    return func(...args)
}