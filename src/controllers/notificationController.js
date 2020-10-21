const { sendNotificationToUser, sendNotificationToUserGroup, getAllNotification} = require("../services/notificationService");
const getNotifications = async (req, res, next) => {
  const notifications = await getAllNotification();
  return res.json(notifications);
};
const sendSmsNotification = (req, res, next) => {};
const sendGroupPushNotification = async (req, res, next) => {
  const { tokens, title, body } = req.body;
  await sendNotificationToUserGroup({tokens, title, body});
};
const sendUserPushNotification = async (req, res, next) => {
  const { token, title, body } = req.body;
  if (!token || title || body) {
    return next(new Error("Token"));
  }
  await sendNotificationToUser({token, title, body});
};
module.exports = {
  getNotifications,
  sendSmsNotification,
  sendGroupPushNotification,
  sendUserPushNotification,
};
