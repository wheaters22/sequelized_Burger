var express = require("express");

var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll({}).then(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.json(dbBurger);
  });
});

// // post route -> back to index
// router.post("/burgers/create", function(req, res) {
//   // takes the request object using it as input for buger.addBurger
//   db.Burger.create(req.body.burger_name, function(result) {
//     // wrapper for orm.js that using MySQL insert callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

// // put route -> back to index
// router.put("/burgers/update", function(req, res) {
//   burger.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

module.exports = router;
