const staticFile = require("../appModules/http-utils/static-file");
let path = require("path");
const mimeTypes = require("../appModules/http-utils/mime-types");

function defaultRouteController(res, url) {
  const extname = String(path.extname(url)).toLowerCase();
  if (extname in mimeTypes) {
    staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};

module.exports = defaultRouteController;

