/*
DESCRIPTION:
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
*/

//Solution    
function countLanguages(list) {
    //variable that holds the object which will be returned
    const obj = {}
    //variable that loops through the given list
    for (arrPos in list) {
        //variable that holds the extracted programming language
        let key = list[arrPos]['language']
        if (key in obj) {
            //if the language key already exist then add 1 to it
            obj[key] += 1
        } else {
            //else create a new key with the value of 1
            obj[key] = 1
        }
    }
    //returned the object with the language and amount of user who use it
    return obj
}