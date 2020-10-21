const express = require("express");
const accessEnv = require("./src/helpers/accessEnv.js");
const bodyParser = require("body-parser");
const setupRoutes = require("./src/routes");
const app = express();
const port = accessEnv("PORT", 7000);
const { RateLimiterMemory } = require("rate-limiter-flexible");

const rateLimiter = new RateLimiterMemory({
  points: 100,
  duration: 1,
});

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter
    .consume(req.ip, 1)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send("Too Many Requests");
    });
};
app.use(rateLimiterMiddleware);
app.use(bodyParser.json());
setupRoutes(app);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
