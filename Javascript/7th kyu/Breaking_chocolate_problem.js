/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/

//answer    
const breakChocolate = function (n, m) {
    //if the n and m are equal or greater than 1, return the product of the 2 minus 1
    //else return 0
    return n >= 1 && m >= 1 ? n * m - 1 : 0
}