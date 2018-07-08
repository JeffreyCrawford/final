'use strict';
var users = require("../models/users");
var counties = require("../models/counties");
var db = require("../config/db")

module.exports = (app, db) => {

    /* Get users */
    app.get("/api/users", function(req, res) {
        db.users.findAll({
          }).then(function (data) {
            res.send(data)
          });
    });

    app.get("/api/counties", function(req, res) {
        res.json(counties);
    });

    /* Create user */
    app.post("/api/users", function(req, res) {
        db.users.create({
            email: req.body.email,
            // categoryID: req.body.categoryID,
            password: req.body.password,
        });
    })
};