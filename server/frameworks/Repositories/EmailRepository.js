import EmailRepositoryContract from "../../applications/contracts/EmailRepositoryContract.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import Email from "../../entities/Email.js";
import createEmailModel from "../persistence/model/Email.js";

class EmailModel extends Model {}

export default class EmailRepository extends EmailRepositoryContract {
  constructor(sequelize) {
    super();
    this.sequelize = sequelize;
    this.EmailModel = createEmailModel(sequelize);
  }
  async addEmail(email) {
    return this.EmailModel.create({ email: email });
  }

  async findEmail(email) {
    return this.EmailModel.findOne({ where: { email: email } });
  }

  async getAllEmail() {
    return this.EmailModel.findAll();
  }
}
