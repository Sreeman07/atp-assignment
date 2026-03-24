import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 10000,
        max: 50000
    },
    brand: {
        type: String,
        required: true
    }
});

export const productModel1 = mongoose.model("product", productSchema);