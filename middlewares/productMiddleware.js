const productMiddleware = {
    validateCreate: (req, res, next) => {
        let body = req.body;

        if (body.price < 0) {
            res.status(400).send("Invalid price");
            return;
        }

        if (body.quantity < 0) {
            res.status(400).send("Invalid quantity");
            return;
        }

        next();
    }
}

export default productMiddleware;