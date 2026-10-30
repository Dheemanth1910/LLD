import { BaseObserver } from "./base-observer";

export class InventoryObserver extends BaseObserver {
  update(message: string): void {
    console.log(" Updated Inventory as the subject has been Changed");
  }
}
