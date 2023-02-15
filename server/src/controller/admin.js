const User = require("../model/user.model");

const getAllUser = async (req, res) => {
  try {
    let users = await User.find().populate("purchased_product.product_id").select("-password");
    return res.status(200).send(users);
  } catch (e) {
    return res
      .status(401)
      .send({ status: false, message: "something went wrong" });
  }
};

module.exports = getAllUser;
