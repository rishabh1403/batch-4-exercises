
function orbitalPeriod(arr) {
  let ans = arr.map((e) => {
    let dis = e.avgAlt + 6367.4447;
    let ac = dis * dis * dis;
    let gm = 398600.4418
    let op = Math.round(2*Math.PI*Math.sqrt(ac/gm));
    let obj = {
      name : e.name,
      orbitalPeriod: op
    }
    return obj;
  })
  return ans;
}

export {
  orbitalPeriod,
};
