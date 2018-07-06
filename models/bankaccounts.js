module.exports = function(sequelize, Sequelize) {
    const BankAccount = Sequelize.define("bankaccount", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        bank_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        routing: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        account: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        contact_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contact_phone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isMobilePhone: true
            }
        }
    });
    return BankAccount;
}