/*
DESCRIPTION:
Sometimes people get tattoos, sometimes they wish they hadn't, sometimes the tattoos must go. Lets create a robot that can remove tattoos.

Your robot function accepts one array argument called skinScan. I have supplied an example array below.

[
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ','X','X',' ',' ',' ','X','X',' ',' '],
[' ','X',' ',' ','X',' ','X',' ',' ','X',' '],
[' ','X',' ',' ',' ','X',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ','X',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
[' ',' ','X',' ',' ',' ',' ',' ','X',' ',' '],
[' ',' ',' ','X',' ',' ',' ','X',' ',' ',' '],
[' ',' ',' ',' ','X',' ','X',' ',' ',' ',' '],
[' ',' ',' ',' ',' ','X',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ','X',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
]
Your task is to create a function for the robot function that will zap away the Xs and replace them with *s. Any array values that are not Xs must be left alone. Below is what skinScan should look like after the tattoo has been removed.

[
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ','*','*',' ',' ',' ','*','*',' ',' '],
[' ','*',' ',' ','*',' ','*',' ',' ','*',' '],
[' ','*',' ',' ',' ','*',' ',' ',' ','*',' '],
[' ','*',' ',' ',' ','*',' ',' ',' ','*',' '],
[' ','*',' ',' ',' ',' ',' ',' ',' ','*',' '],
[' ','*',' ',' ',' ',' ',' ',' ',' ','*',' '],
[' ','*',' ',' ',' ',' ',' ',' ',' ','*',' '],
[' ',' ','*',' ',' ',' ',' ',' ','*',' ',' '],
[' ',' ',' ','*',' ',' ',' ','*',' ',' ',' '],
[' ',' ',' ',' ','*',' ','*',' ',' ',' ',' '],
[' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
]

*/

//Solution  
function robot(skinScan) {
    //returned the array with the subarrays adjusted (replaced x with *)
    return skinScan.map(x => x.map(y => y == 'X' ? '*' : y))
}