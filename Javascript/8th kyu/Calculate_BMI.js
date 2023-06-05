/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//answer
function bmi(weight, height) {
    //Variable which calculates the numeric value of bmi
    const numbericBmi = weight / Math.pow(height, 2)
    //if state that returns a verbal rating of the bmi
    if (numbericBmi <= 18.5) {
        return 'Underweight'
    } else if (numbericBmi <= 25.0) {
        return 'Normal'
    } else if (numbericBmi <= 30.0) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}