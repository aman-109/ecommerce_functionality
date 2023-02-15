const Product = require("../model/product.model");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const token_secret = process.env.TOKEN_KEY;

// Helper functions
const getProd = async (id) => {
  if (!id) {
    let prods = await Product.find();
    return prods;
  }
  let prod = await Product.findOne({ _id: id });
  return prod;
};


// Product Route Callbacks

// 1. Get All Product callback
const getAllProduct = async (req, res) => {
    let prods = await getProd();
    if (prods) {
      return res.status(200).send(prods);
    } else {
      return res.status(401).send({ message: "something went wrong" });
    }
  
};



//2. Add Product to Cart
const addProd = async (req, res) => {
  let { id } = req.params;
  const token = req.cookies.token;
  let verification = jwt.verify(token, token_secret);
  try {
    let user = await User.findOneAndUpdate(
      { email: verification.email },
      { $push: { purchased_product: { product_id: id } } }
    );
    return res
      .status(200)
      .send({ status: true, message: "Product added successfully" });
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};

//3.User Cart
const cartProd = async (req, res) => {
 try {
    let user = await User.findById(req.userId).populate("purchased_product.product_id").select("-password")
  
    return res
      .status(200)
      .send({ status: true, cart:user.purchased_product});
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};



// Add Product in database
const addService = async (req, res) => {
  let data = req.body;
  try {
    let prod = await Product.create({ ...data });
    res
      .status(200)
      .send({ status: true,new:prod, message: "Product created successfully" });
  } catch (e) {
    res.status(401).send({ status: false, message: "something went wrong" });
  }
};

// Delete product
const deleteService = async (req, res) => {
  let { id } = req.params;
  try {
    let prod = await Product.findOneAndDelete({ _id: id });
    res
      .status(200)
      .send({ status: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(401).send({ status: false, message: "something went wrong" });
  }
};



//Edit Product
const editProduct=async(req,res)=>{
  const {name,price,image,id}=req.body
  let prod=await Product.findById(id)
  if(prod){

      let updated=await Product.findByIdAndUpdate(prod._id,{name:name,price:price,image:image},{new:true})
      if(updated){
         return res.send({status:true,message:"Product Updated Successfully",updated})
      }
  }
  else {
     return res.send({status:false,message:"Product not found"})
  }
}

module.exports = { getAllProduct, addProd,cartProd,addService, deleteService,editProduct };
