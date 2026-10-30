import { BaseObserver } from "./base-observer";

export class EmailObserver extends BaseObserver {
  update(message: string): void {
    console.log(" Sent Email As the subject has been Changed");
  }
}
