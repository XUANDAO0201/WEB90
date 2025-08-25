import mongoose, {Schema} from "mongoose";
const ProductModel = mongoose.model('products', new Schema({
    name: String,
    price: Number,  
    quantity: Number
}));

export default ProductModel;