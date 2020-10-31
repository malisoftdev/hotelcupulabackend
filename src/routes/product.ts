import { Router } from "express";

import { userAuth } from "../auth/userAuth";
import ProductController from "../controllers/product";

const productRouter:Router =Router();

productRouter.post('/create', ProductController.Create);
productRouter.post('/delete',ProductController.Delete);
productRouter.post('/read',ProductController.Read);
productRouter.post('/update',ProductController.Update);

export default productRouter;
