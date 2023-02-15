const express = require("express");
let router = express.Router();

const userRoute = require("../controller/auth");
const productRoute = require("../controller/product");
const adminRoute = require("../controller/admin");
//middleware
const { verifyToken, adminVerification } = require("../middlewares/middleware");


router
  .get("/user", userRoute.getUser)
  .post("/user/signup", userRoute.signupUser)
  .post("/user/login", userRoute.loginUser)
  .get("/user/logout", userRoute.logoutUser)
  .get("/products", verifyToken, productRoute.getAllProduct)
  .get("/products/add-product/:id", verifyToken, productRoute.addProd)
  .get("/admin/dashboard", adminVerification, adminRoute)
  .post("/admin/create-service", adminVerification, productRoute.addService)
  .delete(
    "/admin/delete-service/:id",
    adminVerification,
    productRoute.deleteService
  )
  .patch(
    "/admin/edit-service",
    adminVerification,
    productRoute.editProduct
  );

module.exports = router;
