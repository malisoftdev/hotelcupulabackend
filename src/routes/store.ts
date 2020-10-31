import { Router } from "express";

import { userAuth } from "../auth/userAuth";
import StoreController from "../controllers/store";

const storeRouter:Router =Router();

storeRouter.post('/create', StoreController.Create);
storeRouter.post('/delete',StoreController.Delete);
storeRouter.post('/read',StoreController.Read);
storeRouter.post('/update',StoreController.Update);

export default storeRouter;
