import { BaseObserver } from "./base-observer";
export interface Subject {
  attach(observer: BaseObserver): void;
  detach(observerId: string): void;
  notify(): void;
}
