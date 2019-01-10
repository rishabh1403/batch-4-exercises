
function mapObject(obj,cb) {
  let ans = {};
  for(let i in obj){
    ans[i] = cb(obj[i]);
  }
  return ans;
}

export {
  mapObject,
};
