import UserModel from "../models/userModel.js";
import passwordUtils from "../utils/passwordUtils.js";
import authUtil from "../utils/authUtils.js";
import { ApiResponse } from "../utils/utils.js";
const userController = {
    register: async (req, res) => {
        let user = req.body;
        let hashedPassword = passwordUtils.hashPassword(user.password);
        let result = await UserModel.insertOne({...user, password: hashedPassword, avatar: 'https://res.cloudinary.com/dbygym2p0/image/upload/v1757339490/4500_1_01.jpg'});
        delete result.password;
        ApiResponse(201, result, 'Đăng ký thành công', res);
    },

    login: async (req, res) => {
        let userInfo = req.query;
        let user = await UserModel.findOne({username: userInfo.username});
        if (!user){
            ApiResponse(400, null, 'Thông tin đăng nhập không hợp lệ', res);
            return
        }
        let isCorrectPassword = passwordUtils.comparePassword(userInfo.password, user.password);
        if (!isCorrectPassword) {
            ApiResponse(400, null, 'Thông tin đăng nhập không hợp lệ', res);
            return
        } else {
            console.log(user);
            let token = authUtil.genToken({
                username: user.username,
                email: user.email,
                role: user.role
            });
            ApiResponse(200, {username: user.username, email: user.email, avatar: user.avatar, _id: user._id, token, password: undefined}, 'Đăng nhập thành công', res);
            return
        }
    },
    updateUserAvatar: async (req, res) => {
        let avtUrl = req.query.avatar;
        let userID = req.params.id;
        let response = await UserModel.findOneAndUpdate({_id: userID}, {avatar: avtUrl});
        res.status(200).send(response);
    }
}

export default userController;