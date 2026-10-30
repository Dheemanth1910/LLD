import { Observer } from "./observer";

export abstract class BaseObserver implements Observer {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }
  getId(): string {
    return this.id;
  }
  abstract update(message: string): void;
}
