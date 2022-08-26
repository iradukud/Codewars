/*
DESCRIPTION:
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only

*/

//Solution    
function computerToPhone(numbers) {
    //variable that holds the items we want to replace as keys and values we want to replace them with as values
    const obj = { '7': '1', '8': '2', '9': '3', '1': '7', '2': '8', '3': '9' }
    //replaced all the keyboard keys with mobile key and returned final values
    return [...numbers].map(x => obj[x] ? obj[x] : x).join('')
}