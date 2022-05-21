/*
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
*/

//answer    
function Dog(breed) {
    this.breed = breed
    //placed the method in the parent, so it can be accessed by every dog
    this.bark = function () {
        return "Woof"
    }
}

var snoopy = new Dog("Beagle")
var scoobydoo = new Dog("Great Dane")