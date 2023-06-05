/*
DESCRIPTION:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

*/

//Solution  
function remove(string) {
    const words = [...string].filter(x => x != '!').join('')
    const excl = [...string].filter(x => x == '!').length
    return words + '!'.repeat(excl)
}