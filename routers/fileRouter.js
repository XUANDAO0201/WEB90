import { Router } from "express";
import multer from 'multer';
import fileController from '../controller/fileController.js'
const fileRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

fileRouter.post('/upload', upload.single("file"), fileController.upload);

export default fileRouter;