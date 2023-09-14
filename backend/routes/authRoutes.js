const { Router } = require("express");
const authControllers = require("../controller/authControllers");

const router = Router();

router.post("/admin-login", authControllers.admin_login);

module.exports = router;
