/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

//answer
//If the the first letter of Name starts with R(captalized to standard check)
//return name plays banjo else return name doesn't play banjo
const areYouPlayingBanjo = name => name[0].toUpperCase()=='R' ? `${name} plays banjo`: `${name} does not play banjo` 