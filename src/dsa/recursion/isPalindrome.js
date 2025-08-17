function isPalindrome(st){
  if(st.length <= 1){
      return true
  }
  const isMatch = st[0] === st[st.length - 1];
  if(!isMatch) return false
  return isMatch && isPalindrome(st.substring(1, st.length - 1))
}


console.log(isPalindrome('racecar'));