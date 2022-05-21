/*
Task
Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
*/

//answer    
function colorOf(r, g, b) {
    //variables that hold the hex color value for each inputted value and makes sure it's two characters
    let rHex = r.toString(16).length != 2 ? '0' + r.toString(16) : r.toString(16)
    let gHex = g.toString(16).length != 2 ? '0' + g.toString(16) : g.toString(16)
    let bHex = b.toString(16).length != 2 ? '0' + b.toString(16) : b.toString(16)
    //return the Hex color value
    return '#' + rHex + gHex + bHex
}
