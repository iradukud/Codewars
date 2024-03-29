/*
DESCRIPTION:
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
Confused? Roll your mouse/tap over here
*/

//Solution    
function addLetters(...letters) {
    //if given an empty array return 'z'
    if (letters.length == 0) { return 'z' }
    //else determine the sum of the letters
    const sum = letters.map(x => x.charCodeAt(0) - 96).reduce((sum, num) => sum + num)
    //then return the corresponding letter of the sum
    return String.fromCharCode((sum % 26 || 26) + 96)
}