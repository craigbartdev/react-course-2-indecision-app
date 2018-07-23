var nameVar = 'Andrew';
var nameVar = 'Mike'; //can redeclare
console.log('nameVar', nameVar);

let nameLet = 'Jen'; //can only declare let variable once
nameLet = 'Julie'; //can reassign it but not redeclare it
console.log('nameLet', nameLet);

const nameConst = 'Frank'; //can't redeclare or reassign const
console.log('nameConst', nameConst);

// Block scoping 

const fullName = 'Craig Bartholomew';
let firstName; //define outside first to be assigned in if statement below
//used in child blocks
if (fullName) {
    firstName = fullName.split(' ')[0]; //split on space log first element
    console.log(firstName);
}

console.log(firstName); //function scoped