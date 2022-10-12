import db from "../../../database/database";

class UserRepository {
  constructor() {
    this.accountRepository = db;
  }
  async create({ full_name, email, password, phone_number }) {
    const user = await db("user").insert({
      full_name,
      email,
      password,
      phone_number,
    }).returning("*");

    return user;
  }

  async findByEmail(email) {
    const user = await db("user").select("*").where("email", email);
    console.log("user", user);
    return user || undefined;
  }

  async findById(id) {
    const user = await db("user")
      .select("id", "phone_number", "email", "full_name", "account_id")
      .leftJoin("account", "user.id", "account.user_id")
      .where("id", id);

    return user || undefined;
  }

  async findAll() {
    const users = await db("user").select("phone_number", "email", "full_name");

    return users;
  }

  async deleteUser(id) {
    await this.accountRepository("user").where("id", id).delete();
  }
  async findByPhoneNumber(phoneNumber) {
    const user = await db("user")
      .select("phone_number", "email", "full_name")
      .where("phone_number", phoneNumber);

    return user || undefined;
  }
}

export default new UserRepository();
