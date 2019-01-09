
function bouncer(arr) {
  let ans = [];
  arr.forEach(e => {
    if(e) ans.push(e)
  });
  return ans;
}

export {
  bouncer,
};
