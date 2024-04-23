const parseBody = require("../appModules/http-utils/parse-body");
const { config, weight, createRating, updateRating } = require("../appModules/rating");

async function voteRouteController(req, res) {
    if (req.method !== "POST") {
        res.statusCode = 404;
        res.end("Not Found");
    } else {
        try {
            const body = await parseBody(res);
            res.statusCode = 200;
            let data = JSON.parse(body);
            let rating = createRating(data, weight)
            const ratingFile = await fs.readFile(config);
            const ratingArray = JSON.parse(ratingFile);
            const newRating = updateRating(ratingArray, data.id, rating);
            await fs.writeFile(config, JSON.stringify(newRating));
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
        } catch (error) {
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
    };
};

module.exports = voteRouteController;