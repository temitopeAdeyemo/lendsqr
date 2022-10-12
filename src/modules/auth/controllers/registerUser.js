import registrationService from "../services/RegistrationService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

module.exports = asyncWrapper(async (req, res) => {
  const { fullName, email, password, phoneNumber } = req.body;

  const user = await registrationService.execute({
    fullName,
    email,
    password,
    phoneNumber,
  });

  return res.status(200).json({
    success: true,
    message: "Registration Successful, Please log in.",
    data: user,
  });
});
