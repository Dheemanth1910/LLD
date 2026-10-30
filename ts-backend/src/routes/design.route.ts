import { Router , Request , Response } from "express";
import { OrderService } from "../observer-pattern/order-service";
import { EmailObserver } from "../observer-pattern/email-observer";
import { InventoryObserver } from "../observer-pattern/inventory-observer";
import { AnalyticsObserver } from "../observer-pattern/analytics-observer";


const router = Router();

router.get("/observer" , (req : Request , res : Response) => {
    const orderService = new OrderService();
    const emailObs = new EmailObserver('email')
    orderService.attach(emailObs) ;
    const inventoryObs = new InventoryObserver('inventory') 
    orderService.attach(inventoryObs);
    const analyticsObs = new AnalyticsObserver('analytics')  
    orderService.attach(analyticsObs);

    orderService.update();
    orderService.detach(analyticsObs.getId())

    orderService.update();
    res.send("Check the Back end Logs !");

})


export default router;