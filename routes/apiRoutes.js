var bankaccounts = require("../models/bankaccounts");
var communities = require("../models/communities");
var counties = require("../models/counties");
var disbursementrequests = require("../models/disbursementrequests");
var disbursements = require("../models/disbursements");
var profiles = require("../models/profiles");
var projects = require("../models/projects");
var sites = require("../models/sites");
var users = require("../models/users");

module.exports = (function() {
    /* Setup */
    "use strict"
    var apiRoutes = require("express").Router();

    /* API index */
    apiRoutes.get("/", function(req, res) {
        res.send("API INDEX");
    });

    /* Communities */
    apiRoutes.get("/communities", function(req, res) {
        res.json(communities);
    });

    /* Counties */
    apiRoutes.get("/counties", function(req, res) {
        res.json(counties);
    });

    /* Users */
    apiRoutes.get("/users", function(req, res) {
        res.json(users);
    });


    apiRoutes.post("/users", function(req, res) {
        var user = new User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(user) {
            console.log(user.get({ plain: true }))
        })
    })


    return apiRoutes;
})();