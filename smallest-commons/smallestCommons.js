
function smallestCommons(arr) {
  let smaller = arr[0] <= arr[1] ? arr[0] : arr[1];
  let larger = arr[0] <= arr[1] ? arr[1] : arr[0];

  let ans = smaller;

  for(let i = smaller + 1 ; i<= larger;i++){
    ans = (i*ans) / hcf(i,ans)
  }
  return ans;
}


function hcf(a,b){
  if(b === 0){
    return a;
  }
  return hcf(b, a%b);
}

export {
  smallestCommons,
};
