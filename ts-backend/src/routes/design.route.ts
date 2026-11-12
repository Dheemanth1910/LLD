import { Router, Request, Response } from "express";
import { OrderService } from "../observer-pattern/order-service";
import { EmailObserver } from "../observer-pattern/email-observer";
import { InventoryObserver } from "../observer-pattern/inventory-observer";
import { AnalyticsObserver } from "../observer-pattern/analytics-observer";
import {
  CardPayment,
  Checkout,
  UpiPayment,
} from "../strategy-pattern/payment-strategy";
import {
  CaramelDecorator,
  MilkDecorator,
  SugarDecorator,
} from "../decorator-pattern/coffee-decorator";
import { BaseCoffee } from "../decorator-pattern/coffee-interface";
import {
  AlertLogger,
  ConsoleLogger,
  FileLogger,
} from "../chain-of-responsibilty-pattern/loggers";
import { ReportProxy } from "../proxy pattern/report";

const router = Router();

router.get("/observer", (req: Request, res: Response) => {
  const orderService = new OrderService();
  const emailObs = new EmailObserver("email");
  orderService.attach(emailObs);
  const inventoryObs = new InventoryObserver("inventory");
  orderService.attach(inventoryObs);
  const analyticsObs = new AnalyticsObserver("analytics");
  orderService.attach(analyticsObs);

  orderService.update();
  orderService.detach(analyticsObs.getId());

  orderService.update();
  res.send("Check the Back end Logs !");
});

router.get("/strategy", (req: Request, res: Response) => {
  const cardStrategy = new CardPayment();
  const upiStrategy = new UpiPayment();
  const checkout = new Checkout(cardStrategy);
  checkout.placeOrder(100);
  checkout.setStrategy(upiStrategy);
  checkout.placeOrder(100);
  res.send("Check the Back end Logs !");
});

router.get("/decorator", (req: Request, res: Response) => {
  const order = new CaramelDecorator(
    new SugarDecorator(new MilkDecorator(new BaseCoffee())),
  );
  console.log(order.cost());
  console.log(order.description());
  res.send("Check the Back end Logs !");
});

router.get("/cor", (req: Request, res: Response) => {
  const consoleLogger = new ConsoleLogger();
  const fileLogger = new FileLogger();
  const alertLogger = new AlertLogger();

  consoleLogger.setNext(fileLogger).setNext(alertLogger);

  consoleLogger.log({ level: 1, text: "normal message" });
  consoleLogger.log({ level: 2, text: "medium message" });
  consoleLogger.log({ level: 3, text: "critical message" });
  res.send("Check the Back end Logs !");

});

router.get("/proxy" , (req : Request , res : Response) =>{
  const user1 = {
    name : 'user 1',
    role : 1 
  }

  const user2 = {
    name : 'user 2' ,
    role : 2 
  }
  const report1 = new ReportProxy(user1);
  const report2 = new ReportProxy(user2);

  console.log(report1.view())
  console.log(report2.view())
  res.send("Check the Back end Logs !");

})


export default router;
