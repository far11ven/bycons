const fs = require("fs-extra");
const path = require("path");

const iconsDir = path.join(__dirname, "icons/");

// destination.txt will be created or overwritten by default.
fs.copy("../../node_modules/bootstrap-icons/icons", iconsDir, err => {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
});
