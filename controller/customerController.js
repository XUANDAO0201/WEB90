import CustomerModel from "../models/customerModel.js";

const customerController = {
    createOne: async (req, res) => {
        let body = req.body;

        let result = await CustomerModel.insertOne(body);
        res.status(201).send(result);
    },

    getAll: async (req, res) => {
        let result = await CustomerModel.find();

        res.status(200).send(result);
    }
}

export default customerController;