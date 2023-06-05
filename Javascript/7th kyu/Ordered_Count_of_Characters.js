/*
DESCRIPTION:
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

//Solution    
var orderedCount = function (text) {
    //split the inputted text into an array of characters 
    const splitStr = text.split('')
    //created an array from the character array of unique elements
    const str = [...new Set(splitStr)]
    //variable that will hold the array that will be returned 
    let resultArr = []
    //loops throught the whole inputted string
    for (let i = 0; i <= str.length - 1; i += 1) {
        //pushes the unique character into the returning arr and the amount of times it appears in the string
        resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length])
    }
    //returned the final array
    return resultArr
}