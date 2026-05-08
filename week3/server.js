import express from "express";
import mongoose from "mongoose";

import { productApp } from "./productAPI1.js";

const app = express();


// Middleware
app.use(express.json());


// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/productdb")
.then(() => {

    console.log("MongoDB Connected");

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });

})
.catch((err) => {
    console.log("DB Error:", err);
});


// Routes
app.use("/product-api", productApp);


// Test Route
app.get("/", (req, res) => {
    res.send("Backend Running");
});