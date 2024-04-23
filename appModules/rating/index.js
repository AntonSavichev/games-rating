const { PATH_TO_RATING_FILE, WEIGHT } = require("./config");
const makeRatingFile = require("./rating-file");
const {createRating, updateRating} = require("./calculations")


module.exports = { PATH_TO_RATING_FILE, makeRatingFile, WEIGHT, createRating, updateRating}