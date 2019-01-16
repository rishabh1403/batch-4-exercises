
function theatre(people) {
  let changeCounterTen = 0;
  let changeCounterTwenty = 0;
  for (const i of people) {
    if (i === 10) {
      changeCounterTen += 1;
    }
    if (i === 20) {
      if (changeCounterTen === 0) {
        return false;
      }
      changeCounterTen -= 1;
      changeCounterTwenty += 1;
    }
    if (i === 50) {
      if (!(changeCounterTen >= 4
        || changeCounterTwenty >= 2
        || (changeCounterTen >= 2 && changeCounterTwenty >= 1))) {
        return false;
      }
      if (changeCounterTwenty >= 2) {
        changeCounterTwenty -= 2;
      } else if (changeCounterTwenty === 1) {
        changeCounterTwenty -= 1;
        changeCounterTen -= 2;
      } else {
        changeCounterTen -= 4;
      }
    }
  }
  return true;
}

export {
  theatre,
};
