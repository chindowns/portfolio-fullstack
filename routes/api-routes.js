const db = require('./models');
module.exports = (app) => {

    db.Resume.create({ name: "Resume" })
        .then(dbPortfolio => {
            console.log(dbPortfolio);
        })
        .catch(({ message }) => {
            console.log(message);
        });

    db.

    app.get("/", (req, res) => {
        res.render("index");
    });

    app.get("/resume/all", (req, res) => {
        db.User.findAll({})
            .then(dbResume => {
                res.json(dbResume)
            });
    });



}