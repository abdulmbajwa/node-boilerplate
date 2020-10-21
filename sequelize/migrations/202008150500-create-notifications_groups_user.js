module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "notification_groups_users",
      {
        userId: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        notifcationGroupdId: {
            type: DataTypes.STRING
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },    
      },
      {
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("notification_groups_users");