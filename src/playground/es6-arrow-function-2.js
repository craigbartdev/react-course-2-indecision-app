// arguments object - no longer bound with arrow functions

/*
const add = function (a, b) {
    console.log(arguments); //logs extra arguments like 1001
    return a + b;
};*/

const add = (a, b) => {
    //console.log(arguments); //does not work with arrow function
    return a + b;
};

console.log(add(55, 1)); 

//this keyword - no longer bound
/*
const user = {
    name: 'Craig',
    cities: ['Seattle', 'Boston', 'Mazama'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        //this.name not accessible below because different func
        //need to do const that = this in above function and call that.name below
        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};


const user = {
    name: 'Craig',
    cities: ['Seattle', 'Boston', 'Mazama'],
    printPlacesLived: function () { //don't want to be arrow because no parent object
        
        //this gets passed from parents in arrow functions
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

*/
//don't use arrow functions for methods
//use method syntax instead as seen below
//use map to transform items unlike in forEach

const user = {
    name: 'Craig',
    cities: ['Seattle', 'Boston', 'Mazama'],
    printPlacesLived() { //method syntax
        //map does not change this.cites array
        //only changes new copy of array 
        return this.cities.map((city) => this.name + ' has lived in ' + city); //transformation 
        /*
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};
//challenge
const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 4,
    multiply() { //multiply each num in numbers by multiplyby and return array
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());