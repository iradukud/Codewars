/*
DESCRIPTION:
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

*/

//Solution  
function nerdify(txt) {
    //returned the string with the the a/A,e/E and l are replaced with digits
    return txt.replace(/a/gi, '4').replace(/e/gi, '3').replace(/l/g, '1')
}