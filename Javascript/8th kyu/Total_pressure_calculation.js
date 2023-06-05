/*
Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume VVV at a specific temperature T, find the total pressure P_{total}
exerted by the molecules. Formula to calculate the pressure is:

Ptotal=((m1/M1+m2/M2)RT)/V
​
Input
Six values :

M1, M2: molar masses of both gases, in grams (ggg)
m1 and m2: present mass of both gases, in  g⋅mol^−1 
V: volume of the vessel, in  dm3\ dm^3 
T: temperature, in  °C

Output
One value: P_{total}, in units of atm.

Notes
Remember: Temperature is given in Celsius while SI unit is Kelvin (K).  0°C=273.15K

The gas constant  R=0.082dm3⋅atm⋅K−1⋅mol^−1\ R = 0.082dm^3 \cdot atm \cdot K^{-1} \cdot mol^{-1} R=0.082dm^3⋅atm⋅K^−1⋅mol^−1
*/

//answer    
solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    //plugged in all the inuputs into the equation, convert inputs to their right measurements
    //then return the solution
    return (((givenMass1 / molarMass1) + (givenMass2 / molarMass2)) * 0.082 * (temp + 273.15)) / volume
}