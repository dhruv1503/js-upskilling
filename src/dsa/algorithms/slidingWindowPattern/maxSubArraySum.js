// We have to find a set of integers with max sub array in them, the function should take 2 params, one array and one number, that number reprsents the count of integers for sum to be possible. 

function maxSubArraySum(arr, n){
let result = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < arr.length - n - 1; i++){
    const windowArr = [...arr.slice(i, i + n + 1)];
    let sum = 0;
    for(let j = 0; j < windowArr.length; j++){
       sum += windowArr[j]
    }
    if(sum > result){
        result = sum;
    }
}
return result;
}

// without creating a new arr 

function maxSubArraySumNoArr(arr, n){
let result = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < arr.length - n - 1; i++){
    let sum = 0
    for(let j = 0; j < n; j++){
       sum += arr[i + j]
          
    }
    if(sum > result){
        result = sum;
    }
}
return result;
}

// No more efficient solution creating sliding window

function subArrSum(arr, n){
    // 1. check sum from 0 to n
    let tempSum = 0;
    let result = 0;
    // 2. create 0 to n sum
    for(let i = 0; i < n; i++){
        tempSum += arr[i];
    } 
    result = tempSum;
    // 3. run a loop, and then add i + n + 1 and subtract i - 1;
    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i] 
        if(tempSum > result){
            result = tempSum
            
        }
    }
       return result

}


console.log( `Result = ${subArrSum([-1, 10, 20, 14, 10, 22, 4, 100, 24, 10, 2, 4, 2, 1, -100], 3)}`)