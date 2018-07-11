module.exports = function(sequelize, Sequelize) {
    const Project = sequelize.define("project", {
        project_name: {
            type: Sequelize.STRING,
            
        },
        authorize_utility: {
            type: Sequelize.STRING,
        },
        funds_requested: {
            type: Sequelize.STRING,
            

        },
        additional_funds: {
            type: Sequelize.STRING,
            
  
        },
        total_cost: {
            type: Sequelize.STRING,
            

        },
        start_date: {
            type: Sequelize.STRING,
            
        },
        end_date: {
            type: Sequelize.STRING,
            
        },
        description: {
            type: Sequelize.STRING,
            
        },
        signature: {
            type: Sequelize.STRING,
            
        },
        status: {
            type: Sequelize.STRING,
            
        },
    });
    return Project;
}