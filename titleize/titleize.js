const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const not = cond => !cond;

const capitalizeFirstCharOfWord = (sentence, character, index) => {
  if (index > 0) {
    if (not(letters.includes(sentence[index - 1]))) {
      return character.toUpperCase();
    }
    return character;
  }
  if (letters.includes(sentence[index])) {
    return character.toUpperCase();
  }
  return character;
};

function titleize(sentence) {
  let transformedSentence = sentence.toLowerCase().split('');
  // eslint-disable-next-line max-len
  transformedSentence = transformedSentence.map((el, index) => { // eslint-disable-line arrow-body-style
    return capitalizeFirstCharOfWord(transformedSentence, el, index);
  });
  return transformedSentence.join('');
}

export {
  titleize,
};
