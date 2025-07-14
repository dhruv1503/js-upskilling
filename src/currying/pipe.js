// pipe takes a series of funvtion to be applied to a param
// example const a = pipe(double, square);
// ecample param is 3
// a(2) => 3 * 2 => 6 => 6 * 6 => 36

// BRUTE FORCE APPROACH NO FLUFF
// takes in mutiple function, so it's wise to spread the params
function pipe(...args){
// for params consumption, it has to return function, so that it can be called with params, this function will be resoible to absorb function params and process them;

return function(param){
// here we have ...args, array of functions, then param, where everything will be processed,
let result;
for(let i = 0; i < args.length; i++){
if(result === undefined){
result = args[i].apply(this, [param]);
}
else {
    result = args[i].apply(this, [result]);
}
}
return result;
}

}

function pipeReduce(...args){
    return function(param){
        // for reduce, we need a callback function thar takes prevValue, currentvalue, index and array, and initial value, we'll keep initial valye ars undefind
        const value = undefined
        const result = args.reduce((prev, current, index) => (
         prev === undefined ? args[index].apply(this, [param]) : args[index].apply(this, [prev])
        ), value)
        return result
    }
}

function improvedPipeReduce(...args){
    return function(param){
        // for reduce, we need a callback function thar takes prevValue, currentvalue, index and array, and initial value, we'll keep initial valye ars undefind

        // 1.  const value = undefined // correction we don't need this, as we have inital value as param, for 1st function to process
        //5.  const result = args.reduce((prev, current, index) => ( // since we no longer require index
        const result = args.reduce((prev, current, index) => (
        // 3.  prev === undefined ? args[index].apply(this, [param]) : args[index].apply(this, [prev]) sonce we don't need any other value ternery is not required
        // 4. args[index].apply(this, [prev]) // since, args is an array of functions, then why need an index to refer to args array again
        current.apply(this, [prev])
        // ), value) 2. 
        ), param)
        return result
    }
}


function double(num){
    return 2 * num;
}

function square(num){
    return num * num
}

function half(num){
return Math.trunc(num / 2);
}

function triple(num){
return num * 3;
}

const pipe1 = improvedPipeReduce(double, square, half, triple) 
console.log(pipe1(3)) // 6 => 36 => 18 => 54


