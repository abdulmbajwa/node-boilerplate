const sequelize = require("./connection");
const { Model, DataTypes } = require("sequelize");

class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    monthlyCharge: {
      type: DataTypes.DECIMAL,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    passwordHash: {
      allowNull: false,
      type: DataTypes.CHAR(64),
    },
    isValid: {
      //refers to email validation
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    isActive: {
      allowNull: false,
      defaultValue: true,
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    defaultScope: {
      rawAttributes: { exclude: ["passwordHash"] },
    },
    modelName: "users",
    sequelize,
  }
);
class UserDevices extends Model {}
UserDevices.init(
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
    modelName: "user_devices",
    sequelize,
  }
);
class Notification extends Model {}
Notification.init(
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
    modelName: "notifications",
    sequelize,
  }
);
class NotificationGroups extends Model {}
NotificationGroups.init(
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
    modelName: "notification_groups",
    sequelize,
  }
);
class NotificationGroupsUsers extends Model {}
NotificationGroupsUsers.init(
  {
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "users",
      },
    },
    notifcationGroupdId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
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
    modelName: "notification_groups_users",
    sequelize,
  }
);
module.exports = {
  User,
  UserDevices,
  Notification,
  NotificationGroups,
  NotificationGroupsUsers,
};
