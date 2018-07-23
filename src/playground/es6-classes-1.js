class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major; //true or false
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return  description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if (this.homeLocation){
            greet += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greet;
    }
}

const me = new Traveler('Andrew Mead', 26, 'Wisconsin');
console.log(me.getGreeting());

const other = new Traveler(); //defualt name
console.log(other.getGreeting());