import express from "express";
import { GetDailyQuote } from "../../controllers/quote.controller.js";

const QuoteRouter = express.Router();

QuoteRouter.get("/getDailyQuote", GetDailyQuote);


export { QuoteRouter };
