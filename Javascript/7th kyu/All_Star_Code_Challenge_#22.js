/*
DESCRIPTION:
This Kata is intended as a small challenge for my students

All Star Code Challenge #22

Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/

//Solution    
function toTime(seconds) {
    //converted the given seconds into hours
    const secsToHours = seconds / 3600
    //if the hours was less than 1 returned a corresponding string message with hours equal to 0
    if (secsToHours < 1) {
        return `0 hour(s) and ${Math.round(seconds / 60)} minute(s)`
        //else return the corresponding string message with hours and minute values 
    } else {
        return `${Math.trunc(secsToHours)} hour(s) and ${Math.floor((secsToHours % 1) * 60)} minute(s)`
    }
}