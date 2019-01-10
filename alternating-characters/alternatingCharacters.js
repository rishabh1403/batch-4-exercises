
function alternatingCharacters(arr) {
  let ans = [];
  for (let i = 0;i<arr.length;i++){
    let counter = 0;
    for(let j=1;j<arr[i].length;j++){
      if(arr[i][j]===arr[i][j-1]){
        counter++;
      }
    }
    ans.push(counter);
  }
  return ans;
}

export {
  alternatingCharacters,
};
