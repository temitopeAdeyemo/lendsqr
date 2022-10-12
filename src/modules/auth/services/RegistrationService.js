import AppError from "../../../shared/utils/appError";
import userRepository from "../../auth/repositories/UserRepository";
import accountRepository from "../../account/repositories/accountRepositories";
import bcrypt from "../../../shared/services/bcrypt";

class RegistrationService {
  async execute({ fullName, email, password, phoneNumber }) {
    const userExists = await userRepository.findByEmail(email);
    const phoneNumberExists = await userRepository.findByPhoneNumber(
      phoneNumber
    );

    if (userExists.length || phoneNumberExists.length) {
      throw new AppError("Email or Phone Number already exists");
    }

    const hashPassword = await bcrypt.hash(password);
    const user = await userRepository.create({
      full_name: fullName,
      email,
      password: hashPassword,
      phone_number: phoneNumber,
    });

    try {
      await accountRepository.create({
        user_id: user[0].id,
        account_number: phoneNumber,
      });
    } catch (error) {
      await userRepository.deleteUser(user[0].id);
      throw new AppError("Cannot Create User now, Please try again later.");
    }

    return { id: user[0].id, accountNumber: phoneNumber };
  }
}

export default new RegistrationService();
