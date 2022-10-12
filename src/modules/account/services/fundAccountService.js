import AppError from "../../../shared/utils/appError";
import accountRepository from "../repositories/accountRepositories";

class withdrawFundService {
  async execute({ userId, accountId, amount }) {
    
    const userAccount = await accountRepository.getUserAccount(userId);

    if (!userAccount.length) {
      throw new AppError("Account not found", 404);
    }
    
    const newBalance = userAccount[0].balance + parseInt(amount);
    await accountRepository.updateAccountBalance(accountId, newBalance);

    return { amount, balance: newBalance };
  }
}

export default new withdrawFundService();
