function curriedGreet(greeting){
    return function(name){
      return `${greeting} ${name}`
    }
}


const hello = curriedGreet("Hello");
const bye = curriedGreet("Bye")


console.log(hello("Dhruv"));

console.log(bye("Dhruv"))


// according to me what happens here is in memory creation phase, function is added to heap, const hello and bye are declared but to be initialized as they are in TDZ
// in execution phase
// hello is assigned curriedGreet(""), so programs refers to curriedGreet and returns a function return function(name){
//       return `${greeting} ${name}`
//     } which has greeting = "Hello" as a part of closure, now whenever, hello is executed, grogram will not go to curriedGreet, it will go to hello, whose value is retuned function, and same will happen with bye

// now when program reached console.log(hello("Dhruv")), it goes to hello, which has reference of returned function on line 2 and has it closure of greeting