import { BaseObserver } from "./base-observer";

export class AnalyticsObserver extends BaseObserver {
  update(message: string): void {
    console.log(" Updating Analytics as the Subject has been changed");
  }
}
