const parseBody = require("../appModules/http-utils/parse-body");
const fs = require('fs').promises;
const { PATH_TO_RATING_FILE, WEIGHT, createRating, updateRating } = require("../appModules/rating/index");

async function voteRouteController(req, res) {
    if (req.method !== "POST") {
        res.statusCode = 404;
        res.end("Not Found");
    } else {
        try {
            res.statusCode = 200;
            const body = await parseBody(req)
            let data = JSON.parse(body);
            let rating = createRating(data, WEIGHT)
            const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
            const ratingArray = JSON.parse(ratingFile);
            const newRating = updateRating(ratingArray, data.id, rating)
            await fs.writeFile(PATH_TO_RATING_FILE, JSON.stringify(newRating));
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
        } catch (error) {
            res.statusCode = 500;
            res.end("Internal Server Error");
        };  
    };
};

module.exports = voteRouteController;