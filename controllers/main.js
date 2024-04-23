const staticFile = require("../appModules/http-utils/static-file");
let { getData, endpoints } = require("../appModules/api/index");
let { config, makeRatingFile } = require("../appModules/rating/index")

async function mainRouteController(res, publicUrl, extname) {
  let data = await getData(endpoints.games);
  await makeRatingFile(config, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;