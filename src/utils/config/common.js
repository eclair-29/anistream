import moment from "moment";

// ...
// DEFAULT DOCUMENT TITLE
// ...
const docTitle = "Animazing";

// ...
// SEASON CONFIGURATION
// _get season names by grouping each months
// _get full current year
// ...
const currentDate = new Date();
const year = moment(currentDate).format("Y");
let season = moment(currentDate).format("M");

if (
  season === "1" ||
  season === "2" ||
  season === "3"
) season = "winter"
else if (
  season === "4" ||
  season === "5" ||
  season === "6"
) season = "spring"
else if (
  season === "7" ||
  season === "8" ||
  season === "9"
) season = "summer"
else if (
  season === "10" ||
  season === "11" ||
  season === "12"
) season = "fall"

export default {
  docTitle,
  year,
  season
};
