function factorial(num){
    if(num <= 1){
        return 1
    }
    if(num === 2){
        return 2
    }

    return num * factorial(num - 1)
}

console.log(factorial(6))

// 6
// 6 * factorial(5)
/**
 * 6 * factorial(5) => 120 * 6 => 720
 *        5 * factorial(4) => 5 * 24 => 120
 *              4 * factorial(3) 4 * 6 => 24
 *                    3 * factorial(2) // 3 * 2 => 6
 * 
 * 
 *  */      

