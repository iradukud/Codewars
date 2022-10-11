/*
DESCRIPTION:
Sort array by last character

Complete the function to sort a given array or list by last character of elements.

Element can be an integer or a string.

Example:
['acvd', 'bcc']  -->  ['bcc', 'acvd']
The last characters of the strings are d and c. As c comes before d, sorting by last character will give ['bcc', 'acvd'].

If two elements don't differ in the last character, then they should be sorted by the order they come in the array.

*/

//Solution  
function sortMe(arr) {
    console.log(arr)
    if (arr.every((x, i, arr) => arr[0][arr[0].length - 1] == x[x.length - 1])) { return arr }
    return arr.sort((a, b) => (a + "")[(a + "").length - 1].localeCompare((b + "")[(b + "").length - 1]))
}