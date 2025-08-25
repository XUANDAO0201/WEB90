import ProductModel from "../models/productModel.js";

const productController = {
    createOne: async (req, res) => {
        let body = req.body;

        let products = await ProductModel.insertOne(body);
        res.status(201).send(products);
    },

    getAll: async (req, res) => {
        let products = await ProductModel.find();

        res.status(200).send(products);
    }
}

export default productController;