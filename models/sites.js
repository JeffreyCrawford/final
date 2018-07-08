module.exports = function(sequelize, Sequelize) {
    const Site = Sequelize.define("site", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
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
    });

    return Site;
}