
const stripEndOfFile = (text) => {
  if (text.endsWith('\r\n')) {
    text.replace('\r\n', '');
  }
  text.replace('\n', '');
  return text;
};

function stripEof(text) {
  if (Buffer.isBuffer(text)) {
    // eslint-disable-next-line no-param-reassign
    text = text.toString('utf-8');
  }
  return stripEndOfFile(text);
}

export {
  stripEof,
};
