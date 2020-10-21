const {
  getNotifications,
  sendGroupPushNotification,
  sendSmsNotification,
  sendUserPushNotification,
} = require("../controllers/notificationController");
const {
  registerUserDevice,
  userDevices,
} = require("../controllers/userController");

const setupRoutes = (app) => {
  app.get("/devices/:userId", userDevices);
  app.post("/device", registerUserDevice);
  app.get("/notifications", getNotifications);
  app.post("/notifications/sms", sendSmsNotification);
  app.post("/notifications/user", sendUserPushNotification);
  app.post("/notifications/group", sendGroupPushNotification);
};
module.exports = setupRoutes;
