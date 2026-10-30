import { Subject } from "./subject";
import { BaseObserver } from "./base-observer";

export class OrderService implements Subject {
  private observerList: BaseObserver[];
  constructor() {
    this.observerList = [];
  }
  attach(observer: BaseObserver): void {
    this.observerList.push(observer);
  }
  detach(observerId: string): void {
    this.observerList = this.observerList.filter((value, ind) => {
      return value.getId() != observerId;
    });
  }
  notify(): void {
    this.observerList.forEach((observer) => {
      observer.update("State has been Changed !");
    });
  }
  update(): void {
    this.notify();
  }
}
