let http = require("http");
let {mainRouteController, defaultRouteController, gameRouteController, voteRouteController} = require("./controllers/index")



let server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(req, res);
            break;
        default:
            defaultRouteController(res, url);
            break;
    }
});

server.listen(3005)