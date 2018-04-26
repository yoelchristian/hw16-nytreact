const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

var articlesController = require("./server/controllers/articleController.js");
var router = new express.Router();

router.get("/api/articles", articlesController.find);
router.post("/api/articles", articlesController.insert);
router.delete("/api/articles/:id", articlesController.delete);

app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(db, function(error) {
    if (error) throw error;
    console.log("DB connection successful")
});

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});