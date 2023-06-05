/*
DESCRIPTION:
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]

*/

//Solution  
function box(n) {
    //return a box using the given n 
    return Array.from({ length: n }, (_, i) => i == 0 || i == n - 1 ? Array(n).fill('-').join('') : Array(n).fill(' ').map((x, i) => i == 0 || i == n - 1 ? '-' : x).join(''))
}