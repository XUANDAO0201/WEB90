import express from "express";
import { connectToMongoDb } from "./databases/mongodb.js";
import router from "./routers/router.js";
import cors from 'cors';
connectToMongoDb();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.listen('8080', () => {
    console.log("server running");
})