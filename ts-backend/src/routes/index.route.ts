import { Request , Response , Router } from "express";
import { NotificationFactory } from "../factory-pattern/notification-factory";

const router  = Router();

router.get("" , ( req : Request , res : Response) => {
    const notification = NotificationFactory.createNotification("email");
    notification.send("Hi How are you ? ")
    res.send("Hello World");

})

export default router;