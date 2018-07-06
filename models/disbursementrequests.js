module.exports = function(sequelize, Sequelize) {

    const DisbursementRequest = Sequelize.define("disbursementrequest", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        funds_requested: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isCurrency: true
            }
        },
        final_disbursement: {
            type: Sequelize.BOOLEAN,
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
            validate: {
                isIn: ["Approved", "Denied", "Pending", "Disbursed"]
            }
        },
   });

   return DisbursementRequest;
}