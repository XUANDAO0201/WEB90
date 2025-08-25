import mongoose, {Schema} from "mongoose";
const CustomerModel = mongoose.model('customers', new Schema({
    name: String,
    gender: Number,
    email: String
}));

export default CustomerModel;