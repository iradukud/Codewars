/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

//answer    
function getSize(width, height, depth) {
    //return the Surface Area and Volume of a Box
    //used general formula determine each of the value  
    return [(2 * width * height) + (2 * height * depth) + (2 * depth * width), width * height * depth]
}