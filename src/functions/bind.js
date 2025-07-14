Function.prototype.myBind = function(context, params){
    const originalFn = this;
    console.log(this)
return function(moreParams){
    console.log("params => ", params)
    console.log("moreParams =>", moreParams)
    return originalFn
}    
}

function sum(a, b){
    reutrn `Sum of ${a} and ${b} = ${a + b}`
}

const addBy5 = sum.myBind(null, 5)

console.log("addBy5")
console.log(addBy5())
console.log("addBy5")