/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

//answer    
function removeUrlAnchor(url) {
    //return the string with the anchor removed
    return url.split('#')[0]
}