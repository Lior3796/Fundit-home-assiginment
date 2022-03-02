import express from "express";
const bodyParser = require("body-parser");
const tempData = require("./data.json");

const app = express();

const PORT = 8888;

const PAGE_SIZE = 5;

app.use(bodyParser.json());
app.use((_, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
});

app.get("/", (req, res) => {
	res.send("dev api status - up");
});

app.get("/api/match/:page", (req, res) => {
	const page = req.params.page || 1;
	const paginatedData = tempData.slice(
		(Number(page) - 1) * PAGE_SIZE,
		Number(page) * PAGE_SIZE
	);

	res.send(paginatedData);
});

app.listen(PORT);
