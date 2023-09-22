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
    console.log(req.body);
    const { email, name, password } = req.body;
    try {
      const getSeller = await sellerModel.findOne({ email });
      console.log("seller :", getSeller);
      if (getSeller) {
        responseReturn(res, 403, { error: "User already registered" });
      } else {
        const seller = await sellerModel.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          method: "manual",
        });

        await sellerCustomerModel.create({
          myId: seller.id,
        });

        const token = await tokenCreate({ id: seller.id, role: seller.role });
        console.log(token);
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        console.log("Seller info", seller);
        responseReturn(res, 201, { token, message: "register successful." });
      }
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error." });
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
