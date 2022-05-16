/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents
*/

//answer    
function fuelPrice(litres, pricePerLitre) {
    //if the litres met any of the following conditions then apply the corresponding discount
    if (litres > 10) {
        return +(pricePerLitre * litres - (litres * 25 / 100)).toFixed(2)
    } else if (litres >= 8) {
        return +(pricePerLitre * litres - (litres * 20 / 100)).toFixed(2)
    } else if (litres >= 6) {
        return +(pricePerLitre * litres - (litres * 15 / 100)).toFixed(2)
    } else if (litres >= 4) {
        return +(pricePerLitre * litres - (litres * 10 / 100)).toFixed(2)
    } else if (litres >= 2) {
        return +(pricePerLitre * litres - (litres * 5 / 100)).toFixed(2)
    }
    //else return the price without discount
    return +(pricePerLitre * litres).toFixed(2)
}