/*
DESCRIPTION:
Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/

//Solution    
function elapsedSeconds(startDate, endDate) {
    //return the difference between end and start divided by 1000
    return (endDate - startDate) / 1000
}