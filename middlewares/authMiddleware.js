import authUtil from "../utils/authUtils.js";
const authMiddleware = {
    authorize: (req, res, next) => {
        let tokens = req.headers['authorization'];
        if (tokens) {
            let token = tokens.split(' ')[1];
            console.log(token);
            let validateResult = authUtil.validateToken(token);
            if (validateResult.error) {
                res.status(401).send(validateResult.message);
            } else {
                req.userInfo = validateResult.data;
                next();
            }
        } else {
            res.status(401).send("Missing token");
            return;
        }
    }
}

export default authMiddleware;