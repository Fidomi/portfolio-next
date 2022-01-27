// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    try {
        console.log("Server PORT :", process.env.PORT);
        let today = new Date();
        console.log(
            "Day: ",
            today.getDate(),
            " Month: ",
            today.getMonth() + 1,
            " Hour: ",
            today.getHours(),
            " Minutes: ",
            today.getMinutes()
        );
        createServer((req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            console.log("pathname :", pathname);
            // if (pathname === "/favicon.ico") {
            //     app.render(
            //         req,
            //         res,
            //         path.join("/_next/public", "/favicon.ico")
            //     );
            // }
            pathname?.length
                ? app.render(req, res, pathname, query)
                : handle(req, res, parsedUrl);
        }).listen(8080, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:8080");
        });
    } catch (error) {
        console.log("ERROR: ", error.message);
        console.error(error);
    }
});
