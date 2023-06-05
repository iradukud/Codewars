/*
DESCRIPTION:
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

*/

//Solution    
function gordon(a) {
    //returned the string with the necessary adjustments made
    return [...a.toUpperCase()].map(x => x == 'A' ? '@' : x == 'E' || x == 'I' || x == 'O' || x == 'U' ? '*' : x).join('').split(' ').map(x => x + '!!!!').join(' ')
}