const path = require("path");

const iconPath = path.join(__dirname, "icons/");
function get(svg) {
  if (typeof svg === "string" && svg.length > 0) {
    const finalPath = iconPath + svg + ".svg";
    return finalPath;
  }
  
  throw "requested icon doesn't exist"
}
module.exports = get;
