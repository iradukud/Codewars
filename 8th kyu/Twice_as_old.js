/*
Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)
Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

//answer
//Subtract 2 times the son's age from the dad and returned the absolute value 
const twiceAsOld = (dadYearsOld, sonYearsOld) => (dadYearsOld-sonYearsOld)===0?dadYearsOld-sonYearsOld : Math.abs(dadYearsOld-2*sonYearsOld)