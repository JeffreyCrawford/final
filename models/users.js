module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define("user", {

        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8],
                    msg: "Your password must be at least 8 characters"
                }
            }
        }, 
        
    });

    return User;
}
