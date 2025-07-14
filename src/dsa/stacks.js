// function Stack() {
//     let items = [];
//     let index = 0;

//     this.push = function (item) {
//         items[index++] = item;
//     }
//     this.pop = function () {
//         return items[--index]
//     }
//     this.isEmpty = function () {
//         return index === 0;
//     }
//     this.size = function () {
//         return index
//     }
//     this.peek = function () {
//         return items[index - 1];
//     }
//     this.clear = function () {
//         index = 0;
//     }


// }


// In built function implementation

function Stack() {
    let items = [];

    this.push = function (item) {
        items.push(item)
    }

    this.pop = function () {
        return items.pop()
    }

    this.peek = function () {
        return items[items.length - 1]
    }
    this.size = function () {
        return items.length;
    }
    this.isEmpty = function () {
        return items.length === 0
    }
    this.clear = function () {
        items.length = 0;
    }

}


// const stack = new Stack();
// console.log(stack)
// stack.push({message: "message1"})
// stack.push({message: "message2"})
// stack.push({message: "message3"})
// stack.push({message: "message4"})
// console.log(stack.peek())
// console.log(stack.size())
// console.log(stack.isEmpty());
// stack.pop()
// console.log(stack.peek())
// console.log(stack)
// stack.clear();
// console.log(stack.size())
// console.log(stack.isEmpty())
// console.log(stack)

// function isValidParanthesis(prevParanthesis, nextParanthesis) {

//     switch (prevParanthesis) {
//         case "[": return nextParanthesis === "]" || nextParanthesis === "{"
//         case "{": return nextParanthesis === "}" || nextParanthesis === "("
//         case "(": return nextParanthesis === ")"
//         case "}": return nextParanthesis === "]"
//         case ")": return nextParanthesis === "}"
//         default: return false;

//     }
// }

// const paranthesisChecker = (param) => {
//     if (typeof (param) !== "string") return false
//     if (!param.length) return true;
//     if (param.length === 1) return false
//     let result = true;
//     const stack = new Stack();
//     for (let i = 0; i < param.length; i++) {
//         if (i === 0) {
//             stack.push(param.charAt(i));
//         }
//         else {
//             if (isValidParanthesis(stack.peek(), param.charAt(i))) {
//                 stack.push(param.charAt(i));
//                 continue
//             }
//             else {
//                 result = false;
//                 stack.clear()
//                 break;
//             }
//         }
//     }
//     return result
// }

// const check = paranthesisChecker('[]')
// console.log(check)


// // so the correct approach here is to send all the opening brackets inside the stack, and pop them according to closing brackets char buy char
// // like [()], if latest insertion matches the closing, then it's fine else return false;


// const isParnthesesMatching = (open, close) => {
//     return open === ("[" && close === "]") || (open === "{" && close === "}") || (open === "(" && close === ")")
// }


// function correctParanthesisChecker(params) {
//     if (typeof (params) !== 'string') return false;
//     if (params.length === 0) return true
//     if (params.length === 1) return false

//     // declare a new stack
//     const stack = new Stack()


//     for (let char of params) {
//         // check of string, if it's an opening tag, push it to stack.
//         if (["[", "{", "("].includes(char)) {
//             stack.push(char)
//         }
//         else {
//             if (stack.isEmpty()) {
//                 return false
//             }
//             const latestStackItem = stack.peek()
//             // if it's a closing tag, remove check with laatest entry in stack,
//             const isMatch = isParnthesesMatching(latestStackItem, char)
//             if (isMatch) {
//                 stack.pop()
//                 continue
//             }
//             else {
//                 return false
//             }
//         }

//     }

//     return stack.isEmpty()


// }


// function NumStack(){
//     const items = [];
//     const minStack = [];

//     this.push = function(num){
//         if(typeof(num) !== "number"){
//             throw new Error("Only nums are allowed here")
//         }
//         items.push(num)
//         if(minStack.length === 0){
//             minStack.push(num)
//         }
//         else{
//             minStack.push(Math.min(num, minStack[minStack.length - 1]))
//         }
//     } 

//     this.pop = function(){
//          items.pop();
//          minStack.pop()
//     }

//     this.top = function(){
//         return items[items.length - 1];
//     }
//     this.getMin = function(){
//         return minStack[minStack.length - 1]
//     }


// }


// what we wanna do here is we get an array [1, 2, "/"] => 2 / 1 = 2, 

function CalcStack(){
    const stack = []

    this.push = (num) => {
        stack.push(num)
    }
    this.pop = () => {
        return stack.pop()
    }

}


function isOperator(param){
return ["+", "-", "*", "/"].includes(param)
}

const add = (a,  b) => {
    return a + b
}

const minus = (a, b) => {
    return a - b;
}

const divide = (a, b) => {
   return Math.trunc(a/b)
}

const multiply = (a, b) => {
    return a * b;
}

const calculator = (operator, a, b) => {
    switch(operator){
        case "+" : return add(a, b);
        case "-" : return minus(a, b)
        case "*" : return multiply(a, b)
        case "/" : return divide(a, b)
        default : return null;
    }
}

function handlCalcuations(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return 0
    }
    const stack = new CalcStack()
    for(let ele of arr){
        if(isOperator(ele)){
         const num1 = stack.pop();
         const num2 = stack.pop();
         const result = calculator(ele, num1, num2)
         stack.push(result);
        }
        else{
            stack.push(Number(ele))
        }
    }
    return stack.pop()
}