/*
DESCRIPTION:
Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
Examples:
pattern(5):

1
22
333
4444
55555
pattern(11):

1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
Hint: Use \n in string to jump to next line
*/

//Solution    
function pattern(n) {
    //variable that holds the output string
    let output = ""
    //loop that loops n times
    for (i = 1; i <= n; i++) {
        //for the first input just input one
        //for everything else start on a new line and add current n repeated n times
        i == 1 ? output += `${(i)}` : output += `\n${(i + '').repeat(i)}`
    }
    //return the output string
    return output
}