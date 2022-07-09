/*
DESCRIPTION:
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!
*/

//Solution    
function solve(n) {
    //if the given number is not divisible by our smallest note (10) return -1
    if (n % 10) { return -1 }
    //variable that holds an array of our atm's bills
    const bills = [500, 200, 100, 50, 20, 10]
    //loop that keeps count of the bills given/used
    let billCount = 0
    //loops the length of the type of bills
    //and removed each bill extracted from the amount till amount equal 0
    for (i = 0; i < bills.length; i++) {
        if (n >= bills[i]) {
            billCount += Math.floor(n / bills[i])
            n = n % bills[i];
        }
    }
    //returned the amount of bills used/issued
    return billCount
}