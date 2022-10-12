import bcrypt from "../../../shared/services/bcrypt";
import AppError from "../../../shared/utils/appError";
import userRepository from "../../auth/repositories/UserRepository";
import jwtClient from "../../../shared/services/jwtClient";

class AuthenticationService {
  async execute({ email, password }) {
    const user = await userRepository.findByEmail(email);

    if (!user.length) {
      throw new AppError("Invalid email or password", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      throw new AppError("Invalid email or password", 401);
    }

    const payload = {
      id: user[0].id,
    };
    const accessToken = jwtClient.generateAccessToken(payload);

    return { accessToken };
  }
}

export default new AuthenticationService();
