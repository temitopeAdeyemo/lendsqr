import AppError from "../../../shared/utils/appError";
import accountRepository from "../repositories/accountRepositories";

class transferFundService {
  async execute({ userId, accountId, amount, beneficiaryAccountNumber, pin }) {
    const userAccount = await accountRepository.getUserAccount(userId);

    if (!userAccount.length) {
      throw new AppError("Account not found", 404);
    }

    if (userAccount[0].pin !== pin) {
      throw new AppError("Incorrect Pin...", 400);
    }

    const beneficiary = await accountRepository.getAccountByAccountNumber(
      beneficiaryAccountNumber
    );

    if (!beneficiary.length) {
      throw new AppError("beneficiary not found", 404);
    }

    if (userAccount[0].account_number == beneficiary[0].account_number) {
      throw new AppError("You cannot transfer money to yourself", 404);
    }

    if (amount > userAccount[0].balance) {
      throw new AppError("Insufficient funds", 400);
    }

    const newBeneficiaryBalance = beneficiary[0].balance + parseInt(amount);

    await accountRepository.updateBalanceByAccountNumber(
      beneficiaryAccountNumber,
      newBeneficiaryBalance
    );

    const newSenderBalance = userAccount[0].balance - parseInt(amount);
    await accountRepository.updateAccountBalance(accountId, newSenderBalance);

    return { amount, balance: { newSenderBalance, newBeneficiaryBalance } };
  }
}

export default new transferFundService();
