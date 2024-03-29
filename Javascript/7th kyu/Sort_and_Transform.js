/*
DESCRIPTION:
Given an array of numbers, return a string made up of four parts:

a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

the same as above, post sorting the array into ascending order,

the same as above, post sorting the array into descending order,

the same as above, post converting the array into ASCII characters and sorting alphabetically.

The four parts should form a single string, each part separated by a hyphen (-).

Example format of solution: "asdf-tyui-ujng-wedg"

Examples
[111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
[66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
[99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"

*/

//Solution  
function sortTransform(a) {
    const arr = (a.slice(0, 2) + ',' + a.slice(-2)).split(',').map(v => String.fromCharCode(v)).join('');
    const z = a.map(v => String.fromCharCode(v)).sort()
    const arr1 = (z.slice(0, 2) + ',' + z.slice(-2)).split(',').join('')
    const arr2 = arr1.split('').reverse().join('')
    return `${arr}-${arr1}-${arr2}-${arr1}`
}