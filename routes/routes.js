'use strict';
var users = require("../models/users");

module.exports = (app, db) => {

    /* Get users */
    app.get("/users", function(req, res) {
        res.json(users);
    });

    /* Create user */
    app.post("/users", function(req, res) {
        var user = new User.create({
            email: "1@2.com",
            password: "password"
        }).then(function(user) {
            console.log(user.get({ plain: true }))
        })
    })
};