const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// Initializing config file
dotenv.config({ path: ".env" });

const { Handler } = require("./utils/error.js");

const userRoutes = require("./routes/user.routes.js");

const app = express();

// Using bodyParser, cors, cookieParser etc.
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/v1", userRoutes);

// Using Error Middleware
app.use(Handler);

module.exports = app;
