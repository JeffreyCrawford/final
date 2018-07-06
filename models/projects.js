module.exports = function(sequelize, Sequelize) {
    const Project = Sequelize.define("project", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        project_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        authorize_utility: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        funds_requested: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isCurrency: true
            }
        },
        additional_funds: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isCurrency: true
            }
        },
        total_cost: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isCurrency: true
            }
        },
        start_date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        end_date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        signature: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isIn: ["Approved", "Denied", "Pending", "Utility Information Requested", "Completed"]
            }
        },
    });
    return Project;
}