const todaysQuote = {};
let yesterdaysAuthor = "";

async function GetRandomQuote(quoteRepository) {
  try {
    const quote = await quoteRepository.getRandomQuote();
    return quote;
  } catch (error) {
    console.error("Error fetching random quote:", error);
    throw error;
  }
}

async function SelectDailyQuote(quoteRepository) {
  try {
    const quote = await GetRandomQuote(quoteRepository);

    if (!quote) {
      throw new Error("No quotes found in the database");
    }

    if (quote.author === yesterdaysAuthor) {
      let newQuote = await GetRandomQuote(quoteRepository);
      while (newQuote.author === yesterdaysAuthor) {
        newQuote = await GetRandomQuote(quoteRepository);
      }
      todaysQuote.quote = newQuote.quote;
      todaysQuote.author = newQuote.author;
      todaysQuote.authorImg = newQuote.authorImg;
    } else {
      todaysQuote.quote = quote.quote;
      todaysQuote.author = quote.author;
      todaysQuote.authorImg = quote.authorImg;
    }

    yesterdaysAuthor = todaysQuote.author;

    console.log("Selected daily quote:", todaysQuote);
  } catch (error) {
    console.error("Error selecting daily quote:", error);
    throw error;
  }
}

export { SelectDailyQuote, todaysQuote };
