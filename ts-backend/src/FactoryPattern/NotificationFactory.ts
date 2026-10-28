import {
  NotificationType,
  Notification,
  EmailNotification,
  SMSNotification,
  PushNotification,
} from "./Notifications";

class NotificationFactory {
  static createNotification(type: NotificationType): Notification {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        // TypeScript exhaustiveness check — catches missing cases at compile time
        const _exhaustive: never = type;
        throw new Error(`Unknown notification type: ${type}`);
    }
  }
}

// Client code
const notifier = NotificationFactory.createNotification("email");
notifier.send("Your order has shipped!");
