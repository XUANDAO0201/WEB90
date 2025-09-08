import { Router } from "express";
// import productMiddleware from "../middlewares/productMiddleware.js";
import userController from "../controller/userController.js";
const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.put('/update-avatar/:id', userController.updateUserAvatar);
export default userRouter;