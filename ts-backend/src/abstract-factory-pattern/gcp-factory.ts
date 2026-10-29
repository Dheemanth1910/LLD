import { CloudFactory, MessageQueue, Storage } from "./cloud-interface";

class GCSStorage implements Storage {
  upload(file: File): void {
    console.log("File uploaded to gcs");
  }
}

class PubSubQueue implements MessageQueue {
  publish(message: string): void {
    console.log("Uploaded to pub sub Q ");
  }
}

export class GCPFactory implements CloudFactory {
  createStorage(): Storage {
    return new GCSStorage();
  }
  createQueue(): MessageQueue {
    return new PubSubQueue();
  }
}
