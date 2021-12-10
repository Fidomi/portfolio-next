// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    try {
        createServer((req, res) => {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;

            if (pathname === "/about") {
                app.render(req, res, "/about", query);
            } else if (pathname === "/projects") {
                app.render(req, res, "/projects", query);
            } else {
                handle(req, res, parsedUrl);
            }
        }).listen(8080, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:8080");
        });
    } catch (error) {
        console.error(error);
    }
});
