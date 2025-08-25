import { Router } from "express";
import customerController from "../controller/customerController.js";
// import productMiddleware from "../middlewares/productMiddleware.js";
const customerRouter = Router();

customerRouter.post('', customerController.createOne);
customerRouter.get('', customerController.getAll);

export default customerRouter;