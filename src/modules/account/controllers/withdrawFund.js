import withdrawFundService from "../services/withdrawFundService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

export default asyncWrapper(async (req, res) => {
  const { amount } = req.body;
  const { userId, accountId } = req.user;
  const details = await withdrawFundService.execute({
    userId,
    accountId,
    amount,
  });

  return res.status(200).json({
    success: true,
    message: "Withdrawal Successfully...",
    data: details,
  });
});
