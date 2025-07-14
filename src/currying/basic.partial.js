// // function greet(greeting, name) {
// //   return `${greeting}, ${name}`;
// // }

// // const greetHello = partial(greet, "Hello");
// // console.log(greetHello("Dhruv")); // ?


// // function partial(func, param){
// //     return function(nextParam){
// //       return func.apply(this, [param, nextParam])
// //     }
// // }

// // function greet(greeting, name) {
// //   return `${greeting}, ${name}`;
// // }

// // const greetHello = partial(greet, "Hello");
// // console.log(greetHello("Dhruv")); // ?



// function sum(a, b, c) {
//   return a + b + c;
// }

// function partial(func, ...args){
//    if(args.length >= func.length){
//     return func.apply(this, args)
//    }
//    else{
//     return function(...newArgs){
//         return partial.apply(this, [func , ...args, ...newArgs])
//     }
//    }

// }

// // const add5 = partial(sum, 5, 5);
// // console.log(add5(5))
// // console.log(add5(10, 15)); // ?

// function log(level, message) {
//   return `[${level.toUpperCase()}]: ${message}`;
// }

// const errorLogger = partial(log, "error");
// console.log(errorLogger("Something failed")); // ? [ERROR]:Something failed


// const greet = (greeting, name) => {
//     return `${greeting} ${name}`
// }

// function partialRight(func, ...args){
//    if(args.length >= func.length){
//     return func.apply(this, args)
//    }
//    else{
//     return function(...newArgs){
//         return partial.apply(this, [func , ...newArgs, ...args])
//     }
//    }

// }

// const greetDhruv = partialRight(greet, "Dhruv");

// console.log(greetDhruv("Hello"))



// Usage:
function sum(a, b, c) {
  return a + b + c;
}

function curry(func){
    return function curried(...args){
     if(args.length >= func.length){
        return func.apply(this, args)
     }
     else{
        return function (...nextArgs){
            return curried.apply(this, [...args, ...nextArgs])
        }
     }
    }
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6


const _ = Symbol('placeholder');
const join = (a, b, c) => `${a}_${b}_${c}`;

const curriedJoin = advancedCurry(join);

console.log(curriedJoin(_, 'b')('a')('c')); // a_b_c
console.log(curriedJoin('a', _, 'c')('b')); // a_b_c


function mergeArgs(currentArgs = [], newArgs = [], placeholder = undefined){

}

function advancedCurry(func){
    const placeholder = _;
    return function curried(...args){
      const filteredArgs = args.filter((ele) => (ele !== placeholder)); 
      if(filteredArgs.length >= func.length){
        return func.apply(this, args);
      }
      else{
        return function(...newArgs){
            const mergedArgs = mergeArgs(args, newArgs, placeholder);
            return curried.apply(this, mergedArgs);
            
        }
      }
    }
}
