const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");

mongoose
	.connect(config.MONGODB_URL)
	.then((res) => {
		console.log("Connected to database");
	})
	.catch((e) => {
		console.log("failed to connect", e.message);
	});

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogsRouter);

module.exports = app;
