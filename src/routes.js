const setupRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.post("/", (req, res) => {
    res.send("Hello World!");
  });
};

module.exports = { setupRoutes };
