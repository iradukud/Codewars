/*
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

//Solution  
function toCamelCase(str) {
    return str.replace(/[-_]/g, ' ').split(' ').map((x, i) => i == 0 ? x : x[0].toUpperCase() + x.slice(1).toLowerCase()).join('')
}