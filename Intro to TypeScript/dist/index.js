"use strict";
console.log('hello thieves');
let age = 3;
console.log(age);
let firstName = 'christian';
let isAdmin = true;
let lastName = 'Sachs';
lastName = 3;
let students = ['Sabita', 'Jay', 'Tez'];
let dog = [1, 'pitbull'];
dog.push('dylan');
console.log(dog);
const small = 1;
const medium = 2;
const large = 3;
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Large"] = 3] = "Large";
})(Sizes || (Sizes = {}));
console.log(Sizes[1]);
var Instructors;
(function (Instructors) {
    Instructors["Lead"] = "Christian";
    Instructors["Associate"] = "Dylan";
})(Instructors || (Instructors = {}));
console.log(Instructors.Lead);
function calculateTax(income) {
    let bonus = 2000;
    return income * bonus;
}
