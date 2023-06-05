/*
DESCRIPTION:
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
16+18 = 214
26+39 = 515
122+81=1103 
*/

//Solution    
function add(num1, num2) {
    //variables that hold the reverse order of nums, reasoning every number go from one->ten=> hundred etc...
    //to make up for differing num lengths
    const num1Rev = [...`${num1}`].reverse()
    const num2Rev = [...`${num2}`].reverse()

    //if num1 is longer then return a modified num1 (num2 is added to num1)
    if (num1Rev.length > num2Rev.length) {
        return +num1Rev.map((x, i) => num2Rev[i] ? +x + +num2Rev[i] : x).reverse().join('')
    } else {
        //else return a modified num2 (num1 is added to num2)
        return +num2Rev.map((x, i) => num1Rev[i] ? +x + +num1Rev[i] : x).reverse().join('')
    }
}