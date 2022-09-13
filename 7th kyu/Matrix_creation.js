/*
DESCRIPTION:
Create an identity matrix of the specified size( >= 0).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   

*/

//Solution  
function getMatrix(number) {
    //returned the matrix created from the number
    return Array.from({ length: number }, (_, i) => Array(number).fill(0).map((x, z) => z == i ? 1 : x))
} 