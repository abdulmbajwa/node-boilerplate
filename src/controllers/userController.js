const {
  getUserById,
  registerDevice,
  getUserDevices,
} = require("../services/userService");
const registerUserDevice = async (req, res, next) => {
  try {
    console.info(req.body);
    const { userId, registerationToken } = req.body;
    if (!userId || !registerationToken) {
      return next(new Error("UserId or registeration token not present."));
    }
    const user = await getUserById(userId);
    if (!user) {
      return next(new Error("UserId invalid!"));
    }
    const result = registerDevice(userId, registerationToken);
    return res.json(result);
  } catch (e) {
    console.error(e);
    return next(new Error("Error occurred adding device"));
  }
};
const userDevices = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return next(new Error("UserId not present."));
    }
    const devices = await getUserDevices(userId);
    if (!devices) {
      return next(new Error("UserId invalid!"));
    }
    return res.json(devices);
  } catch (e) {
    console.error(e);
    return next(new Error("Error getting User"));
  }
};
module.exports = { registerUserDevice, userDevices };
