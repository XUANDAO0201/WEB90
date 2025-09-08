import jwt from 'jsonwebtoken'

var secret_key = 'WEB90KEY';

const authUtil = {
    genToken: (data) => {
        console.log("key: ", secret_key);
        const token = jwt.sign(data, secret_key, {
            expiresIn: '1s'
        })

        return token;
    },

    validateToken: (token) => {
        try {

            let res = jwt.verify(token, secret_key);
            return {
                data: res
            };
        } catch (ex) {
            return {
                message: 'Token không hợp lệ',
                error: ex
            }
        }
    }
}

export default authUtil;