import { todaysQuote } from "../frameworks/services/SelectQuote.js";

const GetDailyQuote = async (req, res) => {
  try {
    return res.status(200).json(todaysQuote);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { GetDailyQuote };
