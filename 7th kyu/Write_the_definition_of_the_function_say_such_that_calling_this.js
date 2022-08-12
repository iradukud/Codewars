/*
DESCRIPTION:
Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"

*/

//Solution    
const say = str1 => str2 => `${str1} ${str2}`
