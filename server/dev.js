const express = require("express");
const next = require("next");
const https = require("https");
const fs = require("fs");
// const bodyParser = require("body-parser");
// const { createProxyMiddleware } = require("http-proxy-middleware");
// const buildChunks = require("@sprinklrjs/next-infra/lib/chunks/buildChunks");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// const setDevProxy = (expressApp) => {
//   const API_URL = process.env.NEXT_PUBLIC_API_URL;

//   const devProxyConfiguration = {
//     // api paths
//     api: API_URL,
//   };

//   Object.keys(devProxyConfiguration).forEach(function (route) {
//     const proxyTarget = devProxyConfiguration[route];

//     // API docs: https://github.com/chimurai/http-proxy-middleware/tree/v0.21.0#readme
//     const routeProxyConfig = {
//       target: proxyTarget,
//       pathRewrite: {
//         [`^/${route}`]: `${route}`,
//       },
//       changeOrigin: true,
//     };
//     expressApp.use(`/${route}`, createProxyMiddleware(routeProxyConfig));
//     console.log(
//       `> Dev proxy configured. Routing /${route} calls to ${proxyTarget}`
//     );
//   });
// };

app
  .prepare()
  .then(() => {
    const expressApp = express();
    const server = https.createServer(
      {
        key: fs.readFileSync("./config/cert.key"),
        cert: fs.readFileSync("./config/cert.crt"),
      },
      expressApp
    );

    // setup API and Login proxies on dev
    // setDevProxy(expressApp);

    // expressApp.use(bodyParser.json());

    // Default catch-all handler to allow Next.js to handle all other routes
    expressApp.all("*", (req, res) => handle(req, res));

    const server_port = 3000;
    server.listen(server_port, (err) => {
      if (err) throw err;
      console.log(`> Dev server listening on HTTPS port ${server_port}`);
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });

/* eslint @typescript-eslint/no-var-requires: 1*/
