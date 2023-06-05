/*
DESCRIPTION:
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to its location.

Given a map:

..........
..........
..........
.......X..
..........
..........
The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this example:

findSpaceship(map) => [7, 2]
If you cannot find the spaceship, the result should be

"Spaceship lost forever."

*/

//Solution  
function findSpaceship(map) {
    //if a falsey value is passed return corresponding message
    if (!map) { return 'Spaceship lost forever.' }
    //convert the map into an array
    const arr = map.split('\n')
    //value that holds the position of x
    const postX = arr.filter(x => x.includes('X')).map(x => x.indexOf('X'))[0]
    //value that holds the position of y
    const postY = arr.reverse().findIndex(x => x.includes('X'))
    //returned the ships coordinates or a corresponding string message
    return postX == -1 || postY == -1 ? 'Spaceship lost forever.' : [postX, postY]
}