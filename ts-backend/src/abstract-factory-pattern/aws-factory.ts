import { CloudFactory, MessageQueue, Storage  } from "./cloud-interface";


class S3Storage implements Storage{
    upload(file: File): void {
        console.log("File uploaded to s3");
    }
}

class SQSQueue implements MessageQueue{
    publish(message: string): void {
        console.log( "Uploaded to SQS");
    }
}

export class  AWSFactory implements CloudFactory {
    createStorage(): Storage {
        return new S3Storage();
    }
    createQueue(): MessageQueue {
        return new SQSQueue();
    }
}



