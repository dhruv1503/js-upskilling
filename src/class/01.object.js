// const person1 = {
//     name : "Dhruv",
//     email : "dhruvaggarwal1503@gmail.com",
//     introduce : function(){
//         console.log(this.name);
//     }
// }

// const person2 = {
//     name : "another name",
//     email: "namotheremail@mail.com",
//     introduce : function(){
//         console.log(this.name);
//     }
// }

// console.log(person1);
// person1.introduce()
// console.log(person2);

// since this can be very lengthy approach, to if we have to declare objects, therefore, functions are used in js

// function createPerson(name, email){
//     const obj = {};
//     obj.name = name;
//     obj.email = email;
//     obj.introduce = function(){
//         console.log(`My name is ${this.name}`);
//     }
//     return obj;
// }

// const funcPerson1 = createPerson("Dhruv", "dhruvaggarwal1503@gmail.com");
// const funcPerson2 = createPerson("another name", "namotheremail@mail.com");

// console.log(funcPerson1)
// funcPerson1.introduce()
// console.log(funcPerson2)


// There are instances where we might want a new function in a user without devlaring it in the blueprint, I don't know why someone would want ythat but yes

// function giveEmail(){
// console.log(this.email);
// }

// funcPerson1.__proto__.giveEmail = giveEmail
// console.log(funcPerson1.__proto__)
// console.log(funcPerson1.giveEmail())


// what if we want all the objects of createPerson to have giveEmail ?. 


// function createPerson(name, email){
//     const obj = Object.create(additionalFuncs);
//     obj.name = name;
//     obj.email = email;
//     obj.introduce = function(){
//         console.log(`My name is ${this.name}`);
//     }
//     return obj;
// }

// function giveEmail(){
// console.log(this.email);
// }

// const additionalFuncs  = {giveEmail}

// const funcPerson1 = createPerson("Dhruv", "dhruvaggarwal1503@gmail.com");
// const funcPerson2 = createPerson("another name", "namotheremail@mail.com");
// console.log(funcPerson1)
// console.log(funcPerson2)
// funcPerson1.giveEmail(); // now we can see this working, see it's not available directly in object, it's vaialable inside Object's [Prototype] which can also be accessed by __proto__


// Now enters, ES6 based class syntax in picture

// class Person {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         this.introduce = function(){
//         console.log(`My name is ${this.name}`);
//     }
    
//     }
//     introduce = function(){
//         console.log(`My name is ${this.name}`);
//     }
    
// }
// I want to know, difference in function inside constructor and outside

// const p1 = new Person("Dhruv", "dhruvaggarwal1503@gmail.com");
// const p2 = new Person("another name", "namotheremail@mail.com");

// console.log(p1)
// console.log(p2)

// first, constructor creates a new instance of obj everytime so difference =in functions in an constructor and function outside constructor is
// in constructor, a new instance of function is created all the time and outside the constructor, just the refernce of fucntion is given, 
// so prefer funcs like these outside the constructor mor memory efficiency

// class Person {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         this.introduce = function(){
//         console.log(`My name is ${this.name}`);
//     }

// so what we have understood, class = function + Obj

// it's like

// function Person(name){
//    this.name = name; // object creation
// }

// Person.prototype.intro = function(){
//     return this.name
// }


// const p1 = new Person("Dhruv")
// const p2 = new Person("Surbhi")

// console.log(p1)
// console.log(p2)

// so, when class key comes, it's nothing but syntactical sugar, see

class ClassPerson {
    constructor(name){
        this.name = name; // object creation, class keyword in javascript cannot create a variable without the constructor
    }
    // all nthis gets entered into prototype of the object that is created
    into(){
    return this.name
    }
}

/**
 * new Person("Dhruv") ⟶
1. Creates an empty object: {}
2. Links that object’s __proto__ to Person.prototype
3. Binds `this` in Person to that new object
4. Executes the constructor
5. Returns the new object (unless constructor returns its own object)

p = new Person("Dhruv")

p
├── name: "Dhruv"
└── __proto__ ──▶ Person.prototype
                     └── intro()
 */





