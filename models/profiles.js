module.exports = function(sequelize, Sequelize) {
    const Profile = sequelize.define("profile", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        county: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        community: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
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
        }
    });
    return Profile;
}