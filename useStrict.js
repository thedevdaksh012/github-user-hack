function myFunction() {
  "use strict";
  y = 3.14;  // This will cause an error (y is not defined).
}
myFunction()

// this keyword
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


let thisfunction = (a, b) => a * b;

thisfunction()
