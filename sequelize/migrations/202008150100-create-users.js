module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        firstName: {
          type: DataTypes.STRING
        },
        lastName: {
          type: DataTypes.STRING
        },
        phoneNumber: {
          type: DataTypes.STRING
        },
        monthlyCharge: {
          type: DataTypes.DECIMAL
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true
        },
        passwordHash: {
          allowNull: false,
          type: DataTypes.CHAR(64)
        },
        isValid: { //refers to email validation
          allowNull: false,
          defaultValue: false,
          type: DataTypes.BOOLEAN
        },
        isActive: {
          allowNull: false,
          defaultValue: true,
          type: DataTypes.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        deletedAt: {
          allowNull: true,
          type: DataTypes.DATE
        }
      },
      {
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("users");