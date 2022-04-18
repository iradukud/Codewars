/*
    Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

    Square all numbers k (0 <= k <= n) between 0 and n.

    Count the numbers of digits d used in the writing of all the k**2.

    Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

    Examples:
    n = 10, d = 1 
    the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
    We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

    nb_dig(25, 1) returns 11 since
    the k*k that contain the digit 1 are:
    1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
    So there are 11 digits 1 for the squares of numbers between 0 and 25.
    Note that 121 has twice the digit 1.
*/

//answer
function nbDig(n, d) {
    //variable that stores the current squared number
    let squaredNumber = 0
    //variable that counts how many times d appears in the every squared number
    let count = 0
    //loop that squares every number from 0 to n
    for (i = 0; i <= n; i++) {
        //squares every i number
        squaredNumber = Math.pow(i, 2)
        //turns the squared number into a string and splits each character to a element in a array
        //and for each array element check if it equals 1, if it does add to one count 
        String(squaredNumber).split('').forEach((item) => item == d ? count++ : null)
    }
    //returns the total time d appears in the squared products from 0 to n
    return count
}