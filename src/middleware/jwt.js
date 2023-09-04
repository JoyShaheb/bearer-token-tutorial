export const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err, decodedToken) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = decodedToken?.user;
    next();
  });
};
