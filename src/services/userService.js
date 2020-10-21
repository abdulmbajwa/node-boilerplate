const { UserDevices, User } = require("../db/models");
const registerDevice = async (userId, registerationToken) => {
  return await UserDevices.create({
    userId,
    deviceToken: registerationToken,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
const getUserById = async (userId) => {
    return await User.findByPk(userId, {
        attributes: {exclude: ["passwordHash"]}
    });
};
const getUserDevices = async (userId) => {
  return await UserDevices.findAll({
      where: {
        userId
      }
  });
};
module.exports = {
    registerDevice,
    getUserById,
    getUserDevices
}
