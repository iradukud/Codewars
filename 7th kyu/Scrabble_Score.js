/*
DESCRIPTION:
Write a program that, given a word, computes the scrabble score for that word.

Letter Values
You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

Examples
"cabbage" --> 14
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14

*/

//Solution    
function scrabbleScore(str) {
    const strLow = str.toLowerCase()
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (strLow[i] == 'a' || strLow[i] == 'a' || strLow[i] == 'e' || strLow[i] == 'i' || strLow[i] == 'o' || strLow[i] == 'u' || strLow[i] == 'l' || strLow[i] == 'n' || strLow[i] == 'r' || strLow[i] == 's' || strLow[i] == 't') {
            count++
        } else if (strLow[i] == 'd' || strLow[i] == 'g') {
            count += 2
        } else if (strLow[i] == 'b' || strLow[i] == 'c' || strLow[i] == 'm' || strLow[i] == 'p') {
            count += 3
        } else if (strLow[i] == 'f' || strLow[i] == 'h' || strLow[i] == 'v' || strLow[i] == 'w' || strLow[i] == 'y') {
            count += 4
        } else if (strLow[i] == 'k') {
            count += 5
        } else if (strLow[i] == 'j' || strLow[i] == 'x') {
            count += 8
        } else if (strLow[i] == 'q' || strLow[i] == 'z') {
            count += 10
        }
    }
    return count
}