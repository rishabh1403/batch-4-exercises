
function daysInMonth(year, month) {
  const days = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  // check for leap
  if ((year % 100 === 0 && year % 400 === 0)
    || (year % 100 !== 0 && year % 4 === 0)) {
    if (month === 2) {
      return 29;
    }
  }
  // else
  return days[month - 1];
}

export {
  daysInMonth,
};
