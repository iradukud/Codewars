/*
DESCRIPTION:
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

//Solution    
//returned the string with the consecutive duplicates removed
const removeConsecutiveDuplicates = s => s.split(' ').filter((word, index, arr) => word != arr[1 + index]).join(' ')