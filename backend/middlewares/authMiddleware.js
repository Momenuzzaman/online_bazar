var jwt = require("jsonwebtoken");

module.export.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    res.status(409).json({ error: "Please login first." });
  } else {
    try {
      const decodedToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );
      req.role = decodedToken.role;
      req.id = decodedToken.id;
      next();
    } catch (error) {
      res.status(409).json({ error: "Please login." });
    }
  }
};
