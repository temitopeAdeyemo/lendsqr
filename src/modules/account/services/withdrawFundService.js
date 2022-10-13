import AppError from "../../../shared/utils/appError";
import accountRepository from "../repositories/accountRepositories";

class WithdrawFundService {
  async execute({ userId, accountId, amount }) {
    console.log(userId)
    const accountBalance = await accountRepository.getAccountBalance(accountId);
    if (!accountBalance.length) {
      throw new AppError("Account not found", 404);
    }

    if (parseInt(amount) > parseInt(accountBalance[0].balance)) {
      throw new AppError("Insufficient funds", 400);
    }
    
    const newBalance = parseInt(accountBalance[0].balance) - parseInt(amount);
    await accountRepository.updateAccountBalance(accountId, newBalance);

    return { amount, balance: newBalance };
  }
}

export default new WithdrawFundService();
