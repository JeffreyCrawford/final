'use strict';
var users = require("../models/users");
var counties = require("../models/counties");
var db = require("../config/db")

module.exports = (app, db) => {

    /* Get users */
    app.get("/api/users", function(req, res) {
        res.json(users);
    });

    app.get("/api/counties", function(req, res) {
        res.json(counties);
    });

    /* Create user */
    app.post("/api/users", function(req, res) {
        db.users.create({
            email: "1@2.com",
            // categoryID: req.body.categoryID,
            password: "12345678",
          }).then(function (data) {
            res.json(data)
          });
    })
};