/*
The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)
*/

//answer    
function evil(n) {
    //converted the number to it's binary then removed all the zeros
    //then determined the length of the 1s
    //if odd return "It's Odious!" else return "It's Evil!"
    return n.toString(2).replace(/[0]/g, '').length % 2 ? "It's Odious!" : "It's Evil!"
}