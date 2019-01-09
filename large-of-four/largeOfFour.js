
function largeOfFour(a) {
  a[0].sort((e1,e2) => e1-e2);
  a[1].sort((e1,e2) => e1-e2);
  a[2].sort((e1,e2) => e1-e2);
  a[3].sort((e1,e2) => e1-e2);
  return [a[0][3],a[1][3],a[2][3],a[3][3]];
}

export {
  largeOfFour,
};
