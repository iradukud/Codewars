/*
DESCRIPTION:
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

*/

//Solution  
function testit(a, b) {
    console.log(a, b)
    a = [...new Set(a)]
    b = [...new Set(b)]
    return (a.concat(b)).sort((x, y) => x - y)
}