const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { tokenCreate } = require("../utils/tokenCreate");

class authControllers {
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
}

module.exports = new authControllers();
