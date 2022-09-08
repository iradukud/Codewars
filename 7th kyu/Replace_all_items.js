/*
DESCRIPTION:
Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

*/

//Solution  
function replaceAll(seq, find, replace) {
    //if the sequence is a string then change into an array and replace all occurences and return it as string
    if (typeof seq === 'string') {
        return seq.split('').map(v => v === find ? v = replace : v).join('')
    }
    //else return the arr with the finds replaced with replace
    return seq.map(v => v === find ? v = replace : v);
}