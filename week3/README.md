# Week 3 — REST API with Express.js & MongoDB

A backend REST API project built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** that performs full CRUD operations on a Product resource.


## 🗂️ Project Overview

### `productModel1.js` — Mongoose Schema

Defines the structure and validation rules for a Product document in MongoDB.

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `productId` | Number | ✅ | Unique |
| `productName` | String | ✅ | — |
| `brand` | String | ✅ | — |
| `price` | Number | ✅ | Min: 10,000 / Max: 50,000 |

---

### `productAPI1.js` — Express Router

Handles all product-related HTTP requests under the `/product-api` prefix.

#### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/products` | Create a new product |
| `GET` | `/products` | Fetch all products |
| `GET` | `/products/:productId` | Fetch a single product by `productId` |
| `PUT` | `/products/:productId` | Update a product by `productId` |
| `DELETE` | `/products/:productId` | Delete a product by `productId` |

> **Note:** Routes are mounted at `/product-api`, so the full URL is `http://localhost:3000/product-api/products`.

---

### `product.http` — API Test File

A REST Client test file (compatible with the VS Code **REST Client** extension) with ready-to-run requests for all 5 endpoints.

**Sample request body (POST / PUT):**
```json
{
  "productId": 101,
  "productName": "Mobile",
  "brand": "Samsung",
  "price": 20000
}
```

---

## 🛠️ Technologies Used

| Technology | Usage |
|------------|-------|
| Node.js | JavaScript runtime |
| Express.js | Web framework and routing |
| MongoDB | NoSQL database |
| Mongoose | ODM for schema definition and DB operations |

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally (or a MongoDB Atlas connection string)

### Installation

```bash
npm install
```

### Running the Server

```bash
node server.js
# or with nodemon for auto-restart:
npx nodemon server.js
```

The server runs at `http://localhost:3000`.

### Mounting the Router (in `server.js`)

Make sure the product router is mounted in your main server file:

```js
import { productApp } from "./routes/productAPI1.js";
app.use("/product-api", productApp);
```

---

## 🔌 API Reference

Base URL: `http://localhost:3000/product-api`

### Create Product
```http
POST /products
Content-Type: application/json

{
  "productId": 101,
  "productName": "Mobile",
  "brand": "Samsung",
  "price": 20000
}
```

### Get All Products
```http
GET /products
```

### Get Product by ID
```http
GET /products/101
```

### Update Product
```http
PUT /products/101
Content-Type: application/json

{
  "productName": "Watch",
  "brand": "Samsung",
  "price": 15000
}
```

### Delete Product
```http
DELETE /products/101
```

---

## 📌 Key Concepts Practiced

- Building a REST API with Express.js Router
- Mongoose schema design with field-level validation (`required`, `unique`, `min`, `max`)
- Full CRUD operations using Mongoose methods: `save()`, `find()`, `findOne()`, `findOneAndUpdate()`, `findOneAndDelete()`
- Async/await with try-catch-finally for error handling
- Sending structured JSON responses with status codes (`201`, `200`, `500`)
- Testing APIs using the REST Client `.http` file format
