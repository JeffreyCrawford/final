module.exports = function(sequelize, Sequelize) {

    const DisbursementRequest = sequelize.define("disbursementrequest", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        funds_requested: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        final_disbursement: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        invoice_1: {
            type: Sequelize.BLOB
        },
        invoice_2: {
            type: Sequelize.BLOB
        },
        invoice_3: {
            type: Sequelize.BLOB
        },
        signature: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Pending"
        },
   });

   return DisbursementRequest;
}