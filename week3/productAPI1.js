import express from "express";
import { productModel1 } from "../models/productModel1.js";

export const productApp = express.Router();


// Create Product
productApp.post("/products", async (req, res) => {
    try {
        const newProduct = new productModel1(req.body);
        const product = await newProduct.save();

        res.status(201).send({ message: "Product created", payload: product });

    } catch (err) {
        res.status(500).send({ message: "Error creating product", error: err.message });
    }
});


// Read All Products
productApp.get("/products", async (req, res) => {
    try {
        const products = await productModel1.find();
        res.send({ message: "All products", payload: products });

    } catch (err) {
        res.status(500).send({ message: "Error fetching products" });
    }
});


// Read Product by productId
productApp.get("/products/:productId", async (req, res) => {
    try {
        const pid = req.params.productId;

        const product = await productModel1.findOne({ productId: pid });

        res.send({ message: "Product found", payload: product });

    } catch (err) {
        res.status(500).send({ message: "Error fetching product" });
    }
});


// Update Product by productId
productApp.put("/products/:productId", async (req, res) => {
    try {
        const pid = req.params.productId;

        const updatedProduct = await productModel1.findOneAndUpdate(
            { productId: pid },
            req.body,
            { new: true }
        );

        res.send({ message: "Product updated", payload: updatedProduct });

    } catch (err) {
        res.status(500).send({ message: "Error updating product" });
    }
});


// Delete Product by productId
productApp.delete("/products/:productId", async (req, res) => {
    try {
        const pid = req.params.productId;

        const deletedProduct = await productModel1.findOneAndDelete({ productId: pid });

        res.send({ message: "Product deleted", payload: deletedProduct });

    } catch (err) {
        res.status(500).send({ message: "Error deleting product" });
    }
});