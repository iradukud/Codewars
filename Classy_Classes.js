/*
Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

Task
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
*/

//answer    
class Person {
    //create all the propertes from the parameters
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //method that get the method that returns a value aka getter
    get info() {
        return this.getInfo();
    }
    //method that use the properties and returns them in a string 
    getInfo() {
        return `${this.name}s age is ${this.age}`;
    }
}