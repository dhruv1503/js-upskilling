function recursiveRange(num){
    let result = 0;
    (function helper(i){
        if(i > num){
            return num
        }
        result += i;
        i++
        helper(i)
    })(0);
    return result;
}
