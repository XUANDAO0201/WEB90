import { Router } from "express";
import productRouter from "./productRouter.js";
import customerRouter from "./customerRouter.js";

const router = Router();

router.use('/products', productRouter);
router.use('/customer', customerRouter);

export default router;