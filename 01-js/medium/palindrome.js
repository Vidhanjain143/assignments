/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let st="";
  for(let char of str)
  {
    if((char>='a' && char<='z') ||( char>='A' && char<='Z'))
    st+=char.toLowerCase();
  }
  let i=0;
  let j=st.length-1;
  while(i<j)
  {
    if(st[i]!==st[j])
    return false;
   i++;
   j--;
  }
  return true;
}

module.exports = isPalindrome;
