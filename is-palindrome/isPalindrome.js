
function isPalindrome(str) {
  str = str.toString().toLowerCase().split('');
  let temp = [],temp1=[];
  for(let i=0;i<str.length;i++){
    if(str[i]>='0' || str[i]<='9' || str[i] >= 'a' || str[i] <= 'z'){
      temp.push(str[i]);
      temp1.push(str[i]);
    }
  }
  let str1 = temp.join("");
  let str2 = temp1.reverse().join("");
  console.log(str1);
  console.log(str2);
  
  return str1 === str2;

}

export {
  isPalindrome,
};
