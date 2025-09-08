import { Router } from "express";
import productRouter from "./productRouter.js";
import customerRouter from "./customerRouter.js";
import userRouter from "./userRouter.js";
import fileRouter from "./fileRouter.js"
const router = Router();

router.use('/products', productRouter);
router.use('/customers', customerRouter);
router.use('/users', userRouter);
router.use('/files', fileRouter);

export default router;