var http = require("http");
const path = require("path");
const fs = require("fs");

let svg = "at";
let src = "./../bycons/icons/" + svg + ".svg";

console.log(" src >>", src);

fs.readFile(src, function(err, data) {
  if (err) throw err; // Fail if the file can't be read.
  http
    .createServer(function(req, res) {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data); // Send the file data to the browser.
    })
    .listen(8124);
  console.log("Server running at http://localhost:8124/");
});
