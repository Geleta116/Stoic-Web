import QuoteRepositoryContract from "../../applications/contracts/QuoteRepositoryContract.js";
import createQuoteModel from "../persistence/model/Quote.js";

export default class QuoteRepository extends QuoteRepositoryContract {
  constructor(sequelize) {
    super();
    this.sequelize = sequelize;
    this.QuoteModel = createQuoteModel(sequelize);
  }

  async createQuote(quoteData) {
    return this.QuoteModel.create(quoteData);
  }

  async getQuote(id) {
    return this.QuoteModel.findByPk(id);
  }

  async getAllQuotes() {
    return this.QuoteModel.findAll();
  }

  async getRandomQuote(){
    return this.QuoteModel.findOne({
      order: this.sequelize.literal("RAND()"), 
    });
  }
}
