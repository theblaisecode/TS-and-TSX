"use strict";
// ----------------------------------------------- String
let userName = "Blaise";
// userName = 34;
userName = "Max";
// ----------------------------------------------- Number
let userAge = 34;
// ----------------------------------------------- Boolean
let isInvalid = true;
// ----------------------------------------------- Union
let userID = "abc1";
userID = 123;
// ----------------------------------------------- Object
let user;
user = {
    name: "Blaise",
    age: 12,
    isAdmin: true,
    id: 45678,
};
// ----------------------------------------------- Array
let hobbies;
hobbies = ["Traveling", "Manga", "Drawing"];
// number[], boolean[], (string | number)[]
// {name: string; age: number; hobbies: string[]; isAdmin: boolean}[]
// ----------------------------------------------- Adding types to function parmeter
function add(a, b) {
    const result = a + b;
    return result;
}
function sub(a, b) {
    const result = a - b;
    return result;
}
console.log(add(2, 5));
console.log(sub(5, 2));
// ----------------------------------------------- Defining function types
function calculateSum(a, b, calcFn) {
    calcFn(a, b);
}
console.log(calculateSum(2, 5, add));
console.log(calculateSum(12, 5, sub));
