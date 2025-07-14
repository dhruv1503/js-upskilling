// function curry(func){
//     return function curried(...args){
//         console.log(func.length)
//         console.log(args.length)
//         console.log(args)
//         if(func.length > args.length){
//             return function(...nextArgs){
//                 console.log([...args, ...nextArgs])
//                 return curry.bind(this, [...args, ...nextArgs])
//             }
//         }
//         else{
            
//              curried.apply(this, ...args)
//         }
//     }
// }


// const join = (a,b,c) => {
// return `${a}_${b}_${c}` }

// const curriedJoin = curry(join);

// console.log(curriedJoin(1)(2)(3)); //1_2_3


// console.log(curriedJoin(1)(2)(3)); //1_2_3

// console.log(curriedJoin(1,2)(3)); //1_2_3

// console.log(curriedJoin(1)(2)()()(3)); //1_2_3 console.log(curriedJoin(1,2,3)); //1_2_3






// function currySum(num){
//    return function(nextNum){
//     if(nextNum){
//        return currySum(num + nextNum);
//     }
//     else{
//      return num;
//     }
//    }
// }


// console.log(currySum(-12)(21)());



// basic currying
function sum(a, b, c) {
  return a + b + c;
}

function currySum(num){
    return function(nextNum){
        if(nextNum === undefined){
            return num
        }
        else{
            return currySum(num + nextNum);
        }
    }
}

console.log(currySum(1)(2)(3)(4)())

// Explanation 

// currySum(1)(2)(3)(4)()

// currySum(1)(2) // num = 1, nextNum = 2, therefore function currySum(3) is returned;
// (3) // nextnum = 3, therefore function currySum(6) is returned;
// (4) // nextNum = 4, therefore function currySum(10) is returned;
// () // nextNum = undefind, therefore function 10 is returned;

