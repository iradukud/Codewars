/*
DESCRIPTION:
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/

//Solution    
function combine() {
    //variable that holds the object that will be returned 
    const obj = {}
    //loop that goes through all the given objects
    for (postion in arguments) {
        //for each argument made a list of it keys
        keys = Object.keys(arguments[postion])
        //then for each key place it and it's value to the created object
        keys.forEach(x => {
            if (!(x in obj)) {
                obj[x] = arguments[postion][x]
            } else {
                obj[x] += arguments[postion][x]
            }
        })
    }
    //returned the created object
    return obj
}