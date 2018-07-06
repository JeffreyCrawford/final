var communities = require("./communities")
var counties = require("./counties")

module.exports = function(sequelize, Sequelize) {
    const Profile = Sequelize.define("profile", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isMobilePhone: true
            }
        },
        county: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isIn: counties
            }
        },
        community: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isIn: communities
            }
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        zip: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isPostalCode: true
            }
        },
        funds_requested: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        funds_escrowed: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isCurrency: true
            }
        },
        funds_pending: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isCurrency: true
            }
        },
        funds_disbursed: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isCurrency: true
            }
        }
    });
    return Profile;
}