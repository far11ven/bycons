const path = require("path");

const iconPath = path.join(__dirname, "icons/");
const finalPath = iconPath + "at.svg";
const src = path.parse(finalPath);
console.log("finalPath", finalPath);
function get(svg) {
  if (typeof svg === "string" && svg.length > 0) {
    return src;
  }

  throw "requested icon doesn't exist";
}
module.exports = get;
