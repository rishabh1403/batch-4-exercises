
function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw new Error();
  }

  const wordArray = str.split(' ');
  // eslint-disable-next-line
  const length = wordArray.length;

  const firstName = wordArray[0];
  const surName = wordArray[length - 1].toUpperCase();

  return `${firstName} ${surName[0]}.`;
}

export {
  abbreviateString,
};
