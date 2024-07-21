import DatabaseServices from "../../applications/contracts/DataBaseService.js";
import QuoteRepository from "../Repositories/QuoteRepository.js";
import EmailRepository from "../Repositories/EmailRepository.js";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export default class StoicQuoteDBServices extends DatabaseServices {
  constructor() {
    super();
    this.quoteRepository = null;
    this.emailRepository = null;
  }

  async initDatabase(database, username, password, host, port, dialect) {
    const sequelize = new Sequelize(database, username,password, {
      host: host,
      dialect: 'mariadb',
      port: port || 3306,
    });
    this.quoteRepository = new QuoteRepository(sequelize);
    this.emailRepository = new EmailRepository(sequelize);
    await sequelize.sync();
    return sequelize;
  }
}

const stoicQuoteDBServices = new StoicQuoteDBServices();
export { stoicQuoteDBServices };
