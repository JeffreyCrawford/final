module.exports = function(sequelize, Sequelize) {
    const Disbursement = Sequelize.define("disbursement", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        approved_amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isCurrency: true
            }
        },
        ach_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Date.now(),
            validate: {
                isDate: true
            }
        },
    });
    return Disbursement;
}
