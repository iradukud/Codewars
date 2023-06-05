/*
DESCRIPTION:
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

//Solution    
function dotCalculator(equation) {
    //converted the given dots to their lengths  
    const lengths = equation.split(' ').filter(x => x.includes('.')).map(x => x.length)

    //then performed the necessary opperations
    //and returned the corresponding number of dot after the operation has been applied to the original string
    if (equation.includes('+')) {
        const sum = lengths[0] + lengths[1]
        return '.'.repeat(sum)
    } else if (equation.includes('-')) {
        const diff = lengths[0] - lengths[1]
        return '.'.repeat(diff)
    } else if (equation.includes('*')) {
        const prod = lengths[0] * lengths[1]
        return '.'.repeat(prod)
    } else if (equation.includes('//')) {
        const quo = lengths[0] / lengths[1]
        return '.'.repeat(quo)
    }
}