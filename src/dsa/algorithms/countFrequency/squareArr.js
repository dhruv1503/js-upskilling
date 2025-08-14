// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const arr1 = [1,2,3,4,5,6,7,8, 7];
const arr2 = [1, 9, 4, 64, 16, 25, 36, 49, 64]

// Bruteforce  TC - O(n logn) SC - n
function same(arr1, arr2){
    let iterator = 0;
    let result = true;
    const sortedArr1 = [...arr1].sort((a, b) => (a - b));
     const sortedArr2 = [...arr2].sort((a, b) => (a - b));
    while(iterator < arr1.length && iterator < arr2.length){
        if(sortedArr2[iterator] === Math.pow(sortedArr1[iterator], 2)){
            iterator++
        }
        else{
            result = false;
            break
        }
    }
    return result
}

// efficient
// TC - O(n)
// SC - O(n)
function populatedMap(arr){
    const map = new Map()
     arr.forEach((ele) => {
        map.set(ele, (map.get(ele) || 0) + 1) 
    })
    return map;
}

function sameEfficient(arr1, arr2){
    if(!(arr1 && arr2) && arr1.length !== arr2.length && !Array.isArray(arr1) && !Array.isArray(arr2)){
        return false
    }
    // step1 - we map all objects acoording to their frequency
    
    const frequencyCounter1 = populatedMap(arr1)
    const frequencyCounter2 = populatedMap(arr2)
   // compare if values in map1 and map2 are exact squares.
   for(let key of Array.from(frequencyCounter1.keys())){
    if(!frequencyCounter2.has(key * key)){
        return false
    }
    if(frequencyCounter1.get(key) !== frequencyCounter2.get(key * key)){
        return false
    }
}
return true
}

console.log(same(arr1, arr2))
console.log(sameEfficient(arr1, arr2))