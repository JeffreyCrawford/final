module.exports = function(sequelize, Sequelize) {
    const BankAccount = Sequelize.define("bankaccount", {
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