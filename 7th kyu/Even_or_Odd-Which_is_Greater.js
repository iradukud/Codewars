/*
DESCRIPTION:
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

//Solution    
function evenOrOdd(str) {
    //variables that hold the sum of the odd and even values
    const odd = [...str].reduce((odd, num) => num % 2 ? odd + +num : odd, 0)
    const even = [...str].reduce((even, num) => num % 2 ? even : even + +num, 0)
    //returned a string message depending on the values of the odd and even values
    return odd == even ? 'Even and Odd are the same' : even > odd ? 'Even is greater than Odd' : 'Odd is greater than Even'
}