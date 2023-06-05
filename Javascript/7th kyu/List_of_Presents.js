/*
DESCRIPTION:
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

*/

//Solution  
function howManyGifts(maxBudget, gifts) {
    //sorted the passed array argument
    gifts.sort((a, b) => a - b)
    //variable that keeps track of the total price of items bought
    let sum = 0
    //loop that goes through all the gifts or till sum is greater than the budget
    for (i = 0; i < gifts.length; i++) {
        sum += gifts[i]
        if (sum > maxBudget) {
            break
        }
    }
    //return the amout of items bought
    return i
}