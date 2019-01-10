const dataset = require('./dataset.json');

// function accountDataset(...args) {
//   return args;
// }
function hundredThousandairs(){
  // console.log(dataset);
  return dataset.bankBalances.filter(e => {
    return e.amount > 100000;
  })
}
function datasetWithRoundedDollar(){
  return dataset.bankBalances.map(e => {
    return {
      ...e,
      rounded : Math.round(e.amount)
    }
  })
}
function sumOfBankBalances(){
  return dataset.bankBalances.reduce((acc, e) => {
    return acc + parseInt(e.amount,10);
  },0.0)
}
// hundredThousandairs();
export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  // sumOfInterests,
  // higherStateSums,
};
