const express = require('express');
var logger = require('morgan');
const mongjs = require("mongojs");
const mongoose = require('mongoose');
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 5000;

const app = express();
const db = require('./models');

app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfoliodb', {useNewUrlParser:true});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/html-routes.js")(app);

db.Resume.create({ name: "Resume" })
        .then(dbPortfolio => {
            console.log(dbPortfolio);
        })
        .catch(({ message }) => {
            console.log(message);
        });

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/resume/all", (req, res) => {
    db.User.findAll({})
        .then(dbResume => {
            res.json(dbResume)
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });