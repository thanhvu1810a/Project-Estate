import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req, res) => {
  const token = req.cookie.token;
  if (!token) return res.status(401).json({ message: "not authenticated" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "not authenticated" });
  });
  res.status(200).json({ message: "you are authenticated" });
};

export const shouldBeAdmin = async (req, res) => {};
