// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
     let result = 1;
    (function helper(num){
        if(num === arr.length){
            return
        }
        // 
        result *= arr[num]
        num++
        helper(num)
    })(0)
    return result;
    
}