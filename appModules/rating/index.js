const {config, weight} = require("./config");
const makeRatingFile = require("./rating-file");
let createRating = require("./calculations")

module.exports = {config, makeRatingFile, weight, createRating}