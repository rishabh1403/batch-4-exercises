const convertBinaryToChar = num => String.fromCharCode(parseInt(num, 2));

function binaryAgent(str) {
  return str.split(' ').reduce((acc, el) => acc + convertBinaryToChar(el), '');
}

export {
  binaryAgent,
};
