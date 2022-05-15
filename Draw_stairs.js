/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

//answer    
function drawStairs(n) {
    //variable that holds the empty string that will be returned
    let ladder = ''
    //loop that places the I into the string and creates the ladder
    for (i = 1; i <= n; i++) {
        if (i == 1) {
            ladder += 'I'
            continue
        }
        ladder += '\n'.padEnd(i, ' ') + 'I'
    }
    //return the string 
    return ladder
}