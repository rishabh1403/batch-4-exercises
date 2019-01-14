const isCharacterZ = char => char === 'Z';

const isCharacterz = char => char === 'z';

const getAsciiValue = char => char.charCodeAt(0);

const convertAsciiToString = number => String.fromCharCode(number);

function alphabeticShift(stringToShift) {
  return stringToShift.split('')
    .map((el) => {
      if (isCharacterZ(el)) {
        return 'A';
      }
      if (isCharacterz(el)) {
        return 'a';
      }
      return convertAsciiToString(getAsciiValue(el) + 1);
    }).join('');
}

export {
  alphabeticShift,
};
