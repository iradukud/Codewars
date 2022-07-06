/*
DESCRIPTION:
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/

//Solution    
function catMouse(x) {
    //returned the corresponding string message depending on the distance between the mouse and cat
    return [...x].filter(x => x == '.').length <= 3 ? "Caught!" : "Escaped!"
}