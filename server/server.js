const express = require("express");
const { getCategories, getBlogPosts, getFeed } = require("./Utils/content");
const {
  initAppInsights,
  trackEvent,
  trackException,
} = require("./Utils/appInsights");

initAppInsights();

const app = express();
app.use(express.static("build"));
app.use(express.json());

app.use("/api/v1/categories", async (req, res, next) => {
  try {
    trackEvent(req, "api", {
      location: "/api/v1/categories",
      filter: req.query,
    });
    const result = await getCategories();
    res.status(200).json(result);
  } catch (error) {
    trackException(req, error, { location: "/api/v1/categories" });
    res.status(500).send(error);
  }
});

app.use("/api/v1/blogposts/:id", async (req, res, next) => {
  try {
    trackEvent(req, "api", { location: "/api/v1/blogposts/:id" });

    const posts = await getBlogPosts();
    const result = posts.filter((p) => p.id === req.params.id)[0];
    res.status(200).json(result);
  } catch (error) {
    trackException(req, error, { location: "api/v1/blogposts/:id" });
    res.status(500).send(error);
  }
});

app.use("/api/v1/blogposts", async (req, res, next) => {
  try {
    trackEvent(req, "api", {
      location: "/api/v1/blogposts",
      filter: req.query,
    });

    const result = await getBlogPosts(req.query?.category);
    res.status(200).json(result);
  } catch (error) {
    trackException(req, error, { location: "/api/v1/blogposts" });
    res.status(500).send(error);
  }
});

app.use("/feed/rss", async (req, res, next) => {
  try {
    trackEvent(req, "api", { location: "/feed/rss" });

    const result = await getFeed("rss");
    res.set("Content-Type", "application/rss+xml");
    res.send(result);
  } catch (error) {
    trackException(req, error, { location: "/feed/rss" });
    res.status(500).send(error);
  }
});

app.use("/feed/atom", async (req, res, next) => {
  try {
    trackEvent(req, "api", { location: "/feed/atom" });

    const result = await getFeed("atom");
    res.set("Content-Type", "application/rss+xml");
    res.send(result);
  } catch (error) {
    trackException(req, error, { location: "/feed/atom" });
    res.status(500).send(error);
  }
});

app.use("/feed/json", async (req, res, next) => {
  try {
    trackEvent(req, "api", { location: "/feed/json" });

    const result = await getFeed("json");
    res.set("Content-Type", "application/rss+xml");
    res.send(result);
  } catch (error) {
    trackException(req, error, { location: "/feed/json" });
    res.status(500).send(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile("build/index.html", { root: __dirname + "/../server" });
});

app.listen(3000);
