import db from "../../../database/database";

class AccountRepository {
  constructor() {
    this.accountRepository = db;
  }

  async create({ user_id, account_number }) {
    const account = await this.accountRepository("account").insert({
      user_id,
      account_number,
    });

    return account;
  }

  async getUserAccount(id) {
    const userAccount = await this.accountRepository
      .select("full_name", "email", "balance", "account_number", "pin")
      .from("user")
      .leftJoin("account", "user.id", "account.user_id")
      .where("user.id", id);

    return userAccount;
  }

  async getAccountBalance(id) {
    const userAccountBalance = await this.accountRepository
      .select("balance", "account_number")
      .from("account")
      .where("account_id", id);

    return userAccountBalance;
  }

  async getAccountByAccountNumber(accountNumber) {
    const userAccountBalance = await this.accountRepository
      .select("balance", "account_number")
      .from("account")
      .where("account_number", accountNumber);

    return userAccountBalance;
  }

  async updateAccountBalance(id, newBalance) {
    const balance = await this.accountRepository("account")
      .where("account_id", id)
      .update({
        balance: newBalance,
      });

    return balance;
  }

  async updateBalanceByAccountNumber(accountNumber, newBalance) {
    const balance = await this.accountRepository("account")
      .where("account_number", accountNumber)
      .update({
        balance: newBalance,
      });
      
    return balance;
  }
}

export default new AccountRepository();
