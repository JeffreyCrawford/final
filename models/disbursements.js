module.exports = function(sequelize, Sequelize) {
    const Disbursement = Sequelize.define("disbursement", {
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
