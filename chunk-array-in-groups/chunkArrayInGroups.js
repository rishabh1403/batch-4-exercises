
function chunkArrayInGroups(arr,n) {
  let a = [];
    while(arr.length > 0){
        let temp = arr.splice(n);
        a.push(arr);
        arr = temp;
    }
    return a;
}

export {
  chunkArrayInGroups,
};
