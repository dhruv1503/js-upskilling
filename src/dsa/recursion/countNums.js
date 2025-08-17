function countNums(num){
    if(num <= 0){
        return 
    }
    console.log(num)
  countNums(num -= 1);
}


countNums(10)