const staticFile = require("../appModules/http-utils/static-file");
let  endpoints  = require("../appModules/api/config");
let {getData} = require("../appModules/api/api-utils")
let { PATH_TO_RATING_FILE, makeRatingFile } = require("../appModules/rating/index")

async function mainRouteController(res, publicUrl, extname) {
  let data = await getData(endpoints.games);
  await makeRatingFile(PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;