module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "user_devices",
      {
        userId: {
          allowNull: false,
          references: {
            key: "id",
            model: "users",
          },
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        deviceToken: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.STRING,
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
  
  module.exports.down = queryInterface => queryInterface.dropTable("user_devices");