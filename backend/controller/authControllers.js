const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { tokenCreate } = require("../utils/tokenCreate");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");

class authControllers {
  // admin login
  admin_login = async (req, res) => {
    const { email, password } = req.body;

    try {
      // find admin
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        // matching admin password
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          // admin and password match then create token
          const token = await tokenCreate({
            id: admin.id,
            role: admin.role,
          });
          // token set cookies
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "Login successful" });
        } else {
          responseReturn(res, 400, { error: "Your password is incorrect." });
        }
      } else {
        responseReturn(res, 400, { error: "Email not found." });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  seller_register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const getUser = await sellerModel.findOne({ email });
      if (getUser) {
        responseReturn(res, 404, { error: "Email already exits" });
      } else {
        const seller = await sellerModel.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          method: "manual",
          shopInfo: {},
        });
        await sellerCustomerModel.create({
          myId: seller.id,
        });
        responseReturn(res, 201, { message: "Register successful" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get user
  getUser = async (req, res) => {
    const { id, role } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        console.log("sellerInfo");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = new authControllers();
