interface PaymentStrategy {
  pay(amount: number): void;
}

export class Checkout {
  private strategy: PaymentStrategy;
  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }
  placeOrder(amount: number): void {
    console.log("Order Placed");
    this.strategy.pay(amount);
  }
}

export class CardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log("paying via Card");
  }
}

export class UpiPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(" Paying via UPi");
  }
}

export class WalletPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log("Paying via wallet");
  }
}
