module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "notifications",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        text: {
          type: DataTypes.STRING,
        },
        notificationType: {
          type: DataTypes.STRING,
        },
        userId: {
          type: DataTypes.INTEGER,
          references: {
            key: "id",
            model: "users",
          },
        },
        notificationGroupId: {
          type: DataTypes.INTEGER,
          references: {
            key: "id",
            model: "notification_groups",
          },
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
  
  module.exports.down = queryInterface => queryInterface.dropTable("notifications");