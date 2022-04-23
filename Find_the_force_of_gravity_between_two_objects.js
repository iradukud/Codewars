/*
Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution
*/

//answer    
solution = (arr_val, arr_unit) => {
    //variables which will be used in the gravitational force equation
    //for each variable looked at the unit given and converted it to the appropriate unit value
    const m1 = arr_unit[0] == 'lb' ? arr_val[0] * 0.453592 : arr_unit[0] == 'μg' ? arr_val[0] * 1 * 10 ** -9 : arr_unit[0] == 'mg' ? arr_val[0] * 1 * 10 ** -6 : arr_unit[0] == 'g' ? arr_val[0] * 0.001 : arr_val[0]
    const m2 = arr_unit[1] == 'lb' ? arr_val[1] * 0.453592 : arr_unit[1] == 'μg' ? arr_val[1] * 1 * 10 ** -9 : arr_unit[1] == 'mg' ? arr_val[1] * 1 * 10 ** -6 : arr_unit[1] == 'g' ? arr_val[1] * 0.001 : arr_val[1]
    const d = arr_unit[2] == 'ft' ? arr_val[2] * 0.3048 : arr_unit[2] == 'μm' ? arr_val[2] * 1 * 10 ** -6 : arr_unit[2] == 'mm' ? arr_val[2] * 0.001 : arr_unit[2] == 'cm' ? arr_val[2] * 0.01 : arr_val[2]
    //plugged the variables into the gravitational force equation and returned it's solution
    return ((6.67 * 10 ** -11) * m1 * m2) / d ** 2
}
