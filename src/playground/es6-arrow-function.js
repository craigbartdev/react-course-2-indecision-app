/*
const square = function (x) { //es5
    return x * x;
};

console.log(square(8));

//const squareArrow = (x) => { //es6 
 //   return x * x;
//};
//arrow function names are always anonymous so always assign to variable

//arrow function expression syntax returns implicitly
const squareArrow = (x) => x * x; //concise version


console.log(squareArrow(6));


const getFirstName = (name) => {
    const firstName = name.split(' ')[0];
    return firstName;
};
*/

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Craig Bartholomew'));
