import mongoose, {Schema} from "mongoose";
const UserModel = mongoose.model('users', new Schema({
    username: String,
    gender: Number,
    email: String,
    password: String,
    role: Number,
    avatar: String
}));

export default UserModel;