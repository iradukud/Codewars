/*
DESCRIPTION:
Echo Program
Write an echoProgram function (or echo_program depend on language) that returns your solution source code as a string.

Note:
Function.prototype.toString has been disabled.

*/

//Solution  
const fs = require("fs");
const file = fs.readFileSync("/workspace/solution.txt", "utf-8")
function echoProgram() {
    return file;
}