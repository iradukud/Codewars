/*
DESCRIPTION:
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

*/

//Solution    
function strCount(obj) {
    //variable that keeps count of the strings in the object
    let count = 0
    //loop that goes through the whole object
    for (key in obj) {
        //if the value of the current key is add to the count
        if (typeof obj[key] == 'string') count++
        //if value of the current key is ab object used recursion to obtain the string count in the object
        if (typeof obj[key] == 'object') count += strCount(obj[key])
    }
    //returned the total string count in the object
    return count
}