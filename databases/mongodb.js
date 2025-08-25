import mongoose from "mongoose";

export const connectToMongoDb = () => {
    mongoose.connect('mongodb+srv://xuandao9876:xuandao9876@cluster.vua1f1n.mongodb.net/web90?retryWrites=true&w=majority&appName=Cluster').then(() => {
        console.log('Connected to db');
    })
}