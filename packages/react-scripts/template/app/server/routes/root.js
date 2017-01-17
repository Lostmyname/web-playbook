var express = require("express");
var router = express.Router();
var currencies = require("../models/currencies");

module.exports = router.get("/", function(req, res, next) {
  currencies
    .get()
    .then(data => {
      res.render("default", {
        title: "title",
        body: "Page content",
        json: data
      });
    })
    .catch(error => {
      res.render("error", { error, message: "error fetching data" });
    });
});
