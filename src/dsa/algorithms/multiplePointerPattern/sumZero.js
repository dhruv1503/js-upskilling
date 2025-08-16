// Find 2 nearest numbers that sum upto zero, and return 2 nums [num1, num2], if no number sets found, send -1.

function sumZero(arr){
    if(!arr){
        return -1
    }
    if(!Array.isArray(arr)){
        return -1
    }
    if(arr.length <= 1){
        return -1;
    }
   
    let p1 = 0;
    let p2 = arr.length;
    while(p1 < p2){
        console.log("-------")
        console.log(p1)
        console.log(p2)
        console.log("-------")
        if(arr[p1] + arr[p2] === 0){
           return [arr[p1], arr[p2]]
        }

       
        if(p1 + p2 > 0){
            p2--
        }
       else{
          p1++
       }


    }
    return -1
}


console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]))

