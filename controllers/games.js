let fs = require("fs").promises;
let {PATH_TO_RATING_FILE, getRandomGame} = require("../appModules/rating")

async function gameRouteController(res) {
  try {
    let ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
    let data = JSON.parse(ratingFile);
    const game = data[Math.floor(Math.random() * data.length)];
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (error) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
};

module.exports = gameRouteController; 