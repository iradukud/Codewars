/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

//answer    
//split the string and then reversed it and then joined it back together to create a string which will be returned
const nameShuffler = str => str.split(' ').reverse().join(' ')