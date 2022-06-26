/*
DESCRIPTION:
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

//Solution    
function capMe(names) {
    //return a array of names with proper capping
    return names.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
}