import { Router } from "express";
import userRouter from "./user";
import productRouter from "./product";
import storeRouter from "./store";

const routes:Router =Router();

/*here add all new routes that are created on the project*/
routes.use("/user",userRouter);
routes.use("/product",productRouter);
routes.use("/store",storeRouter);

export default routes;
