/*
DESCRIPTION:
Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
If an object is missing the property, you should just leave it as undefined/None in the output array.
*/

//Solution    
function pluck(objs, name) {
    //returned the value of the selected name in an array
    return objs.map(x => x[name])
}