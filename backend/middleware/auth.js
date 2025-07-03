const jwt = require("jsonwebtoken");

export const userAuth = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "UnAuthorized Action",
    });
  }

  try {
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecoded.id) {
      req.user = { id: tokenDecoded.id }; // Attach to req.user instead of req.body
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "UnAuthorized Action",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
