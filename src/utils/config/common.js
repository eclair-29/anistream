// ...
// DEFAULT DOCUMENT TITLE
// ...
const docTitle = "Animazing";

// ...
// ANIME LIST FILTERING CONFIGURATIONS
// ...
const alphaChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
  "X", "Y", "Z"];

const specialChar = "." || "?" || "\"" || "0" || "1" || "2" || "3" || "4" || "5" || "6" ||
  "7" || "8" || "9";

const alphaNumericBtnGroup = ["All", "#", ...alphaChar];

export default {
  alphaChar,
  alphaNumericBtnGroup,
  docTitle,
  specialChar
};
