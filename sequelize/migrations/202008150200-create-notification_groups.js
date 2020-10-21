module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "notification_groups",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        }, 
        userId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            key: "id",
            model: "users",
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
  
  module.exports.down = queryInterface => queryInterface.dropTable("notification_groups");