/*
DESCRIPTION:
It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.

Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}
*/

//Solution    
function splitTheBill(x) {
    //variable that holds the average amount spent   
    const total = Object.values(x).reduce((sum, num) => sum + num) / Object.values(x).length
    //loop that goes through all the keys and adjust them their values accordingly
    for (key in x) {
        x[key] = +(x[key] - total).toFixed(2)
    }
    //returned the modified object
    return x
}