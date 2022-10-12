import { hash, compare } from "bcryptjs";
import environment from "../../config/environment";

class Bcrypt {
  constructor() {
    this.saltRounds = environment.saltRounds;
  }

  hash(data) {
    return hash(data, this.saltRounds);
  }

  compare(string, hashedData) {
    return compare(string, hashedData);
  }
}

export default new Bcrypt();
