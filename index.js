const markdownEscapes = require("markdown-escapes");

const htmlEntities = { "<": "&lt;", "&": "&amp;" };

const escape = (input, options={}) => {
  const flavor = options.flavor || "commonmark";
  let backslashEscapableCharacters;
  let entityEscapableCharacters;
  if (flavor === "gfm") {
    backslashEscapableCharacters = markdownEscapes.gfm;
    entityEscapableCharacters = ["<", "&"];
  } else {
    backslashEscapableCharacters = markdownEscapes.commonmark;
    entityEscapableCharacters = [];
  }
  const escapableCharacters = backslashEscapableCharacters.concat(
    entityEscapableCharacters
  );
  const escapableCharactersWithBackslash = escapableCharacters.map(
    character => "\\" + character
  );
  const regexpString = "(" + escapableCharactersWithBackslash.join("|") + ")";
  const regexp = new RegExp(regexpString, "g");
  return input.replace(regexp, match => {
    if (backslashEscapableCharacters.includes(match)) {
      return "\\" + match;
    } else {
      return htmlEntities[match];
    }
  });
};

module.exports = escape;
