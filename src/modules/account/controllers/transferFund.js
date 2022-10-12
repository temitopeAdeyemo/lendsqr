import transferFundService from "../services/transferFundsService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

export default asyncWrapper(async (req, res) => {
  const { amount, accountNumber, pin } = req.body;
  const { userId, accountId } = req.user;

  const details = await transferFundService.execute({
    userId,
    accountId,
    amount,
    beneficiaryAccountNumber: accountNumber,
    pin,
  });

  return res.status(200).json({
    success: true,
    message: "Sent!...",
    data: details,
  });
});
