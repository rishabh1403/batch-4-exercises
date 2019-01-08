/* 14 (*)
  Write a function html() that can be used as a template string tag, and produces
  a string in which all the interpolated pieces are escaped as HTML. Use the
  supplied escapeHTML function to do the escaping.

  Remember that a tag function gets an array of in-between strings as its first
  argument, and then the interpolated values as further arguments.
*/
function escapeHTML(string) {
  return String(string)
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;');
}

function html(strings, ...variables) {
  return `${strings[0]}${escapeHTML(variables[0])}${escapeHTML(strings[1])}${escapeHTML(variables[1])}${strings[2]}`;
}

function callTemplateTagFunction() {
  const trueExpression = '5 > 4';
  const falseExpression = '3 < 1';
  return (html`The expression ${trueExpression} is "true" & ${falseExpression} is false`);
}

export {
  callTemplateTagFunction,
};
