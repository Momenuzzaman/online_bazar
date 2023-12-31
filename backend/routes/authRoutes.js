const { Router } = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const authControllers = require("../controller/authControllers");

const router = Router();

// admin login path
router.post("/admin-login", authControllers.admin_login);

// seller register
router.post("/seller-register", authControllers.seller_register);

// seller Login
router.post("/seller-login", authControllers.seller_login);

// get user
router.get("/get-user", authMiddleware, authControllers.getUser);

module.exports = router;
