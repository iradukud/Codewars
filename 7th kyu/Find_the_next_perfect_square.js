/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

//answer    
//determined whether the number was'nt a perfect square, if true return -1
//else return the next perfect square (square root of last perfect square, then +1 and square ans)
const findNextSquare = sq => Math.sqrt(sq) % 1 != 0 ? -1 : (Math.sqrt(sq) + 1) ** 2;