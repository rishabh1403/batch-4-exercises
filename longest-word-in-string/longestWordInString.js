function longestWordInString(sentence) {
  return sentence.split(' ').reduce((acc, word) => {
    if (word.length > acc) {
      return word.length;
    }
    return acc;
  }, 0);
}

export {
  longestWordInString,
};
