const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "app")));
app.use("/css", express.static(path.join(__dirname, "app/css")));
app.use("/js", express.static(path.join(__dirname, "app/js")));

// Remove EJS
// app.set("views", path.join(__dirname, "app_server/views"));
// app.set("view engine", "ejs");

// Routes
const mainRoutes = require("./app_server/routes/mainRoutes");
app.use("/pages", mainRoutes);  // moved to /pages

const apiRoutes = require("./app_api/routes/apiRoutes");
app.use("/api", apiRoutes);

// Home page (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/recipeDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
