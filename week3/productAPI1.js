import express from "express";

import { productModel1 } from "./productModel1.js";

export const productApp = express.Router();



// CREATE PRODUCT
productApp.post("/products", async (req, res) => {

    try {

        const newProduct = new productModel1(req.body);

        const savedProduct = await newProduct.save();

        res.status(201).send({
            message: "Product Created",
            payload: savedProduct
        });

    } catch (err) {

        res.status(500).send({
            message: "Error Creating Product",
            error: err.message
        });
    }
});




// GET ALL PRODUCTS
productApp.get("/products", async (req, res) => {

    try {

        const products = await productModel1.find();

        res.send({
            message: "All Products",
            payload: products
        });

    } catch (err) {

        res.status(500).send({
            message: "Error Fetching Products"
        });
    }
});




// GET PRODUCT BY ID
productApp.get("/products/:productId", async (req, res) => {

    try {

        const pid = req.params.productId;

        const product = await productModel1.findOne({
            productId: pid
        });

        res.send({
            message: "Product Found",
            payload: product
        });

    } catch (err) {

        res.status(500).send({
            message: "Error Fetching Product"
        });
    }
});




// UPDATE PRODUCT
productApp.put("/products/:productId", async (req, res) => {

    try {

        const pid = req.params.productId;

        const updatedProduct = await productModel1.findOneAndUpdate(
            { productId: pid },
            req.body,
            { new: true }
        );

        res.send({
            message: "Product Updated",
            payload: updatedProduct
        });

    } catch (err) {

        res.status(500).send({
            message: "Error Updating Product"
        });
    }
});




// DELETE PRODUCT
productApp.delete("/products/:productId", async (req, res) => {

    try {

        const pid = req.params.productId;

        const deletedProduct = await productModel1.findOneAndDelete({
            productId: pid
        });

        res.send({
            message: "Product Deleted",
            payload: deletedProduct
        });

    } catch (err) {

        res.status(500).send({
            message: "Error Deleting Product"
        });
    }
});