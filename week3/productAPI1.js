// Import Express framework
import express from "express";

// Import Product Model
import { productModel1 } from "./productModel1.js";

// Create Router object
export const productApp = express.Router();




// ================= CREATE PRODUCT =================
productApp.post("/products", async (req, res) => {

    try {

        // Create new product using request body data
        const newProduct = new productModel1(req.body);

        // Save product to database
        const savedProduct = await newProduct.save();

        // Send success response
        res.status(201).send({
            message: "Product Created",
            payload: savedProduct
        });

    } catch (err) {

        // Send error response if creation fails
        res.status(500).send({
            message: "Error Creating Product",
            error: err.message
        });
    }
});




// ================= GET ALL PRODUCTS =================
productApp.get("/products", async (req, res) => {

    try {

        // Fetch all products from database
        const products = await productModel1.find();

        // Send product list
        res.send({
            message: "All Products",
            payload: products
        });

    } catch (err) {

        // Send error response if fetching fails
        res.status(500).send({
            message: "Error Fetching Products"
        });
    }
});




// ================= GET PRODUCT BY ID =================
productApp.get("/products/:productId", async (req, res) => {

    try {

        // Get productId from URL parameter
        const pid = req.params.productId;

        // Find product using productId
        const product = await productModel1.findOne({
            productId: pid
        });

        // Send found product
        res.send({
            message: "Product Found",
            payload: product
        });

    } catch (err) {

        // Send error response if fetching fails
        res.status(500).send({
            message: "Error Fetching Product"
        });
    }
});




// ================= UPDATE PRODUCT =================
productApp.put("/products/:productId", async (req, res) => {

    try {

        // Get productId from URL parameter
        const pid = req.params.productId;

        // Update product details
        const updatedProduct = await productModel1.findOneAndUpdate(
            { productId: pid }, // Search condition
            req.body,           // Updated data
            { new: true }       // Return updated document
        );

        // Send updated product
        res.send({
            message: "Product Updated",
            payload: updatedProduct
        });

    } catch (err) {

        // Send error response if update fails
        res.status(500).send({
            message: "Error Updating Product"
        });
    }
});




// ================= DELETE PRODUCT =================
productApp.delete("/products/:productId", async (req, res) => {

    try {

        // Get productId from URL parameter
        const pid = req.params.productId;

        // Delete product from database
        const deletedProduct = await productModel1.findOneAndDelete({
            productId: pid
        });

        // Send deleted product details
        res.send({
            message: "Product Deleted",
            payload: deletedProduct
        });

    } catch (err) {

        // Send error response if deletion fails
        res.status(500).send({
            message: "Error Deleting Product"
        });
    }
});
