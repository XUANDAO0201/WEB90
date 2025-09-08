import { Router } from "express";
import productController from "../controller/productController.js";
import productMiddleware from "../middlewares/productMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const productRouter = Router();

productRouter.post('', productMiddleware.validateCreate, productController.createOne);
productRouter.get('',authMiddleware.authorize, productController.getAll);

export default productRouter;