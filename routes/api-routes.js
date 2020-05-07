const db = require('./models');
module.exports = (app) => {

db.Portfolio.create({ name: "Portfolio" })
    .then(dbPortfolio => {
        console.log(dbPortfolio);
    })
    .catch(({ message }) => {
        console.log(message);
    });

}