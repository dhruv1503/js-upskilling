function helperOdd(arr) {
  let result = [];
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  return result;
}

function collectOdds(arr = []) {
  let result = [];

  if (arr.length === 0) {
    return;
  }

  function odds(nums) {
    if (nums.length === 0) {
      // return arr[0]
      return;
    }
    if (nums[0] % 2 !== 0) {
      result.push(nums[0]);
    }
    odds(nums.slice(1));
  }

  odds(arr);
  return result;
}





// pure recursion 

function collectOddsPure(arr){
    let result = [];
    (function helper(num){
    if(num === arr.length - 1){
        return result
    }
    if(arr[num] % 2 !== 0){
        result.push(arr[num])
    }
    console.log(result)
    helper(num + 1)
    })(0)

    // result = result.concat(collectOddsPure(arr.slice(1)))
    return result;
}

console.log(collectOddsPure([1,2,3,4,5,6,7,8]))


// result.concat(f([1,2,3,4,5,6,7,8])) => [].concat[1] => [1]
// result.concat(f([2,3,4,5,6,7,8])) => [1].concat[] => [1]
// result.concat(f([3,4,5,6,7,8])) => [1].concat([3]) => [1, 3]
// result.concat(f([4,5,6,7,8])) => [1,3].concat([]) => [1,3]
// result.concat(f([5,6,7,8])) => [1,3].concat([5]) => [1,3,5]
// result.concat(f([6,7,8])) => [1,3,5].concat[] => [1,3,5]
// result.concat(f([7,8]))  => [1,3,5].concat([7]) => [1,3,5,7]
// result.concat(f([8])) => [1,3,5,7].concat([]) => [1,3,5,7]
// result.concat(f([])) => [1,3,5,7].concat([]) => [1,3,5,7]
