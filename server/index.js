import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { CronJob } from "cron";
import scrapeQuotes from "./scraper.js";
import StoicQuoteDBServices from "./frameworks/persistence/StoicQuoteDbService.js";
import { SelectDailyQuote } from "./frameworks/services/SelectQuote.js";
import http from "http";
import { QuoteRouter } from "./frameworks/routes/quoteRouter.js";
import { EmailRouter } from "./frameworks/routes/emailRouter.js";
import emailController from "./controllers/email.controller.js";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT, 10);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const stoicQuotes = new StoicQuoteDBServices();
const { SendDailyQuoteToEmails } = emailController(stoicQuotes.emailRepository);
(async () => {
  try {
    await stoicQuotes.initDatabase(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      process.env.DB_HOST,
      process.env.DB_PORT || 3306,
      "mariadb"
    );
  
    await scrapeQuotes(stoicQuotes.quoteRepository);
    
    await SelectDailyQuote(stoicQuotes.quoteRepository);

    app.use("/email", EmailRouter(stoicQuotes.emailRepository));

    const server = http.createServer(app);

    app.use("/quote", QuoteRouter);

    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });

    new CronJob(
      "0 0 * * *",
      async () => {
        try {
          await SelectDailyQuote(stoicQuotes.quoteRepository);
          await SendDailyQuoteToEmails(stoicQuotes.emailRepository);
        } catch (error) {
          console.error("Error executing daily quote selection:", error);
        }
      },
      null,
      true,
      "America/New_York"
    );
  } catch (error) {
    console.error("Error setting up the database:", error);
    process.exit(1);
  }
})();
