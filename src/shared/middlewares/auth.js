import JwtClient from "../services/jwtClient";
import AppError from "../utils/appError";
import userRepository from "../../modules/auth/repositories/UserRepository";
const auth = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    token = token.replace("Bearer ", "");
    const decryptedToken = JwtClient.verifyAccessToken(token);
    const user = await userRepository.findById(decryptedToken.id);

    if (!user.length) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = { userId: user[0].id, accountId: user[0].account_id };

    next();
  } catch (error) {
    return res.status(401).json({message:error.message});
  }
};

export default auth;
