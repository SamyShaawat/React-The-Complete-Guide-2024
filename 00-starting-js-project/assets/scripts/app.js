// import { apiKey } from "./util.js";

// console.log(apiKey);

// let userMessage = 'Hello World!';
// userMessage = 'New value';
// console.log(userMessage);
// console.log(userMessage);

// function greet(name, message = 'Hello!') {
//     // console.log(name);
//     // console.log(message);
//     return "Hi, I am " + name + ". " + message;
// }


// const g1 = greet('samy');
// const g2 = greet('mohamed', "hi man !!");

// console.log(g1);
// console.log(g2);   


const user = {
    name: 'Samy',
    age: 23,
    greet() {
        console.log("Hello!");
        console.log(this.age)
    },
};


// console.log(user.name);


// user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    greet() {
        console.log("Hello!");
        console.log(this.age)
    }
}

const user1 = new User("max", 35);


console.log(user1);