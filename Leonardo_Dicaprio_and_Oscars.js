/*
You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"
*/

//answer    
function leo(oscar) {
    //based on the value of oscar return the correspond string message
    return oscar == 86 ? "Not even for Wolf of wallstreet?!" : oscar == 88 ? "Leo finally won the oscar! Leo is happy" : oscar > 88 ? "Leo got one already!" : "When will you give Leo an Oscar?"
}