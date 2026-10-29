import express, { Application } from "express";
import healthRoutes from "./routes/health.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { NotificationFactory } from "./factory-pattern/notification-factory";
import indexRoutes from "./routes/index.route";

const app: Application = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/" , indexRoutes)



app.use(errorHandler);

export default app;
