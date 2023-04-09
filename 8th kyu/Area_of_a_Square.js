/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

//answer    
//found the radius of the circle first then got the area of the square by squaring the radius
//return the result of the above operations as a number with 2 decimal places
const squareArea = a => +(((a*4)/(Math.PI*2))**2).toFixed(2)
