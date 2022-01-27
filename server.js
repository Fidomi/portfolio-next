// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    try {
        console.log("Server PORT :", process.env.PORT);
        createServer((req, res) => {
            const parsedUrl = parse(req.url, true);
            console.log("parsedUrl :", parsedUrl);
            const { pathname, query } = parsedUrl;
            pathname?.length
                ? app.render(req, res, pathname, query)
                : handle(req, res, parsedUrl);
        }).listen(8080, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:8080");
        });
    } catch (error) {
        console.log(error.message);
        console.error(error);
    }
});
