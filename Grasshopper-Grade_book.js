/*
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/

//answer
function getGrade(s1, s2, s3) {
    //variable that calculates the average of the 3 grades
    const average = (s1 + s2 + s3) / 3
    //depending of the average return a letter grade
    if (average < 60) {
        return 'F'
    } else if (average < 70) {
        return 'D'
    } else if (average < 80) {
        return 'C'
    } else if (average < 90) {
        return 'B'
    } else if (average <= 100) {
        return 'A'
    }
}