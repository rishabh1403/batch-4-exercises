const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function titleize(sentence) {
  let transformedSentence = sentence.toLowerCase().split('');
  transformedSentence = transformedSentence.map((el, index) => {
    if (index > 0) {
      if (!letters.includes(transformedSentence[index - 1])) {
        return el.toUpperCase();
      }
      return el;
    }
    if (letters.includes(transformedSentence[index])) {
      return el.toUpperCase();
    }
    return el;
  });
  return transformedSentence.join('');
}

export {
  titleize,
};
