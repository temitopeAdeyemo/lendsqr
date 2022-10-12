import fundAccountService from "../services/fundAccountService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

export default asyncWrapper(async (req, res) => {
  const { amount } = req.body;
  const {userId, accountId} = req.user
  const details = await fundAccountService.execute({ userId, accountId, amount });

  return res.status(200).json({
    success: true,
    message: "Account Funded successfully...",
    data: details,
  });
});
