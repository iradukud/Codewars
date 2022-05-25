/*
Our counter prototype is broken. Can you spot, what's wrong here?
*/

//answer    
function Counter() {
    this.value = 0;
}
// the methods are being added to the existing object
//thus we need to use an assignment operator to add them to the object
Counter.prototype.increase = function () {
    this.value++;
};

Counter.prototype.getValue = function () {
    return this.value;
};

Counter.prototype.reset = function () {
    this.value = 0;
};