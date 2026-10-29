export type CloudProvider = "gcp" | "aws" ;


export interface Storage{
    upload(file : File ) : void;
}

export interface MessageQueue{
    publish(message : string) : void;
}

export interface CloudFactory{
    createStorage() : Storage;
    createQueue() : MessageQueue;
}

