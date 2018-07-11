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

    /* Create user */
    app.post("/api/users", function(req, res) {
        db.users.create({
            email: req.body.email,
            // categoryID: req.body.categoryID,
            password: req.body.password,
        });
    })

    /* Get profiles */
    app.get("/api/profiles", function(req, res) {
        db.profiles.findAll({
          }).then(function (data) {
            res.send(data)
          });
    });

    /* Create Profile */
    app.post("/api/profiles", function(req, res) {
        db.profiles.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            county: req.body.county,
            community: req.body.community,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
        });
    })

    /* Get disbursement requests */
    app.get("/api/disbursementrequests", function(req, res) {
        db.disbursementrequests.findAll({
          }).then(function (data) {
            res.send(data)
          });
    });

    /* Create disbursement requests */
    app.post("/api/disbursementrequests", function(req, res) {
        db.disbursementrequests.create({
            name: req.body.name,
            funds_requested: req.body.amount,
            final_disbursement: req.body.finalDisbursement,
            signature: req.body.signature,
            date: req.body.date,
            status: req.body.status
        });
    })

    /* Get projects */
    app.get("/api/projects", function(req, res) {
        db.projects.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Create projects */
    app.post("/api/projects", function(req, res) {
        db.projects.create({
            project_name: req.body.projectName,
            authorize_utility: req.body.authorizeUtility,
            funds_requested: req.body.fundsRequested,
            additional_funds: req.body.additionalFunds,
            total_cost: req.body.totalCost,
            start_date: req.body.startDate,
            end_date: req.body.endDate,
            description: req.body.description,
            signature: req.body.signature,
            status: req.body.status
        });
    })

    app.get("/api/counties", function(req, res) {
        res.json(counties);
    });


};