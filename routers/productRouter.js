import { Router } from "express";
import productController from "../controller/productController.js";
import productMiddleware from "../middlewares/productMiddleware.js";
const productRouter = Router();

productRouter.post('', productMiddleware.validateCreate, productController.createOne);
productRouter.get('', productController.getAll);

export default productRouter;