/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

//answer    
function isToday(date) {
    //created an object that has to day's date
    const todaysDate = new Date()
    //ran several test to see if the day's matched  
    //used date methods to get year,month and day
    return date.getFullYear() == todaysDate.getFullYear() && date.getMonth() == todaysDate.getMonth() && date.getDate() == todaysDate.getDate()
}