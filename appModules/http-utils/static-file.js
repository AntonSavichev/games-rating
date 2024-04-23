let fs = require("fs");
let mimeTypes = require("./mime-types.js");

let staticFile = (res, filePath, ext) => {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile("./public" + filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      res.end(data);
    };

  });
}

module.exports = staticFile;
