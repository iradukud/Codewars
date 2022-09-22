/*
DESCRIPTION:
Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]

*/

//Solution  
function diff(a, b) {
    //removed all the elements included in the other
    const sort1 = a.filter(v => !b.includes(v))
    const sort2 = b.filter(v => !a.includes(v))
    //returned a unique set of characters from both variables and sorted them 
    return [...new Set(sort1.concat(sort2))].sort()
}