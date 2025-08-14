// Polymorphism => // Same method name, different behaviors depending on the object/type/context.

// class User {
//     constructor(name, age){
//         this._age = age;
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     greet(){
//       return `Hello ${this.name}, You are currently using free trial!`
//     }
// }

// class PremiumUser extends User {
//     constructor(name, age){
//         super(name, age)
//     }
//     // method overloading
//     greet(){
//         return `Hello ${this.name}, let win the day`
//     }
// }

// const u1 = new User("Dhruv", 29);
// const u2 = new PremiumUser('Surbhi', 29);

// console.log(u1.greet())

// console.log(u2.greet())

// function greetAnymone(obj){
// return obj.greet() // we'll see hopw greet function changes itself as per context to it's class / object
// }

// console.log(greetAnymone(u1))

// console.log(greetAnymone(u2))

// Assignment
/**
 * Create 3 objects:

ConsoleLogger → logs to console

FileLogger → returns "Logging to a file..."

CloudLogger → returns "Logging to the cloud..."

Create a function performLogging(logger) that:

Accepts any object with .log() method

Calls logger.log() without checking its type

Handles edge case if .log() is not present
 */

class ConsoleLogger {
  static log() {
    console.log("logged to console");
  }
}

class FileLogger {
  static log() {
    return "Logging to a file...";
  }
}

class CloudLogger {
  static log() {
    return "Logging to the cloud...";
  }
}

function performLogging(params) {
  if (
    params &&
    typeof params === "function" &&
    params.log &&
    typeof params.log === "function"
  ) {
    return params.log();
  }
  return `Log method is not present`;
}

performLogging(ConsoleLogger);
performLogging(FileLogger);
performLogging(CloudLogger);
console.log(performLogging({}));
