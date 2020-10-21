const admin = require("firebase-admin");
const { RateLimiterMemory } = require("rate-limiter-flexible");
const serviceAccount = require("../../notification-service-58850-firebase-adminsdk-5iz02-536d270a81.json");
const { Notification } = require("../db/models");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://notification-service-58850.firebaseio.com",
});
const getAllNotification = async () => {
  return await Notification.findAll();
};
const sendNotificationToUser = async ({ token, title, body }) => {
  await Notification.create({
    title,
    notificationType: "User",
    createdAt: new Date(),
    updatedAt: new Date()
  });
  await admin.messaging().send({
    notification: {
      body,
      title,
    },
    token,
  });
};
const sendNotificationToUserGroup = async ({ tokens, title, body }) => {
  if (tokens.length < 500) {
    await admin.messaging().sendMulticast({
      notification: {
        body,
        title,
      },
      tokens,
    });
  } else {
    // max devices to send message is 500

    const rateLimiter = new RateLimiterMemory({
      points: 100,
      duration: 1,
    });

    const maxSize = 500;
    while (tokens.length > 0) {
      const subArray = tokens.splice(0, maxSize);
      await admin.messaging().sendMulticast({
        notification: {
          body,
          title,
        },
        tokens: subArray,
      });
    }
  }
};
module.exports = {
    sendNotificationToUser,
    sendNotificationToUserGroup,
    getAllNotification
}