/*
DESCRIPTION:
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

//Solution    
function wordsToMarks(string) {
    //converted each character to ait's character code and subtracted 96 to have a starting at 1
    //then returned the sum of these characters
    return [...string].map(x => x.charCodeAt(0) - 96).reduce((sum, num) => sum + num)
}