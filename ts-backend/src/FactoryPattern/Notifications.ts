// Product interface
export interface Notification {
  send(message: string): void;
}

// Concrete products
export class EmailNotification implements Notification {
  send(message: string) {
    console.log(`Sending EMAIL: ${message}`);
  }
}

export class SMSNotification implements Notification {
  send(message: string) {
    console.log(`Sending SMS: ${message}`);
  }
}

export class PushNotification implements Notification {
  send(message: string) {
    console.log(`Sending PUSH: ${message}`);
  }
}
export type NotificationType = "email" | "sms" | "push";

