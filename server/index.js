const express = require("express");
const app = express();
const port = 5000;
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct);

// app.get("/api/products", (req, res) => {
//   // console.log("hi");
//   res.status(200).send(products);
// });

app.listen(port, () => {
  console.log("server running on Port 5000");
});
