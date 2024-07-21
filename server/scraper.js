import axios from "axios";
import { JSDOM } from "jsdom";

const baseURLs = [
  "https://www.goodreads.com/quotes/tag/stoic?page=",
  "https://www.goodreads.com/quotes/tag/stoicism?page=",
];

const authorsList = [
  "diogenes of babylon",
  "cato the younger",
  "hecato",
  "musonius rufus",
  "chrysippus",
  "cleanthes",
  "seneca",
  "epictetus",
  "marcus aurelius",
  "zeno of citium",
];

async function fetchQuotes(url, page) {
  try {
    const response = await axios.get(url + page);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${url} page ${page}:`, error);
    return null;
  }
}

async function fetchTotalPages(url) {
  try {
    const response = await axios.get(url + 1);
    const dom = new JSDOM(response.data);
    const lastPage = dom.window.document.querySelector(".next_page").previousElementSibling.textContent;
    return parseInt(lastPage, 10) || 1;
  } catch (error) {
    console.error(`Error fetching total pages for ${url}:`, error);
    return 1;
  }
}

function cleanAuthorName(author) {
  author = author.replace(/[^a-zA-Z\s]/g, "").trim();
  return author.charAt(0).toUpperCase() + author.slice(1);
}

async function scrapeQuotes(quoteRepository) {
  const quoteSet = new Set();

  for (const baseURL of baseURLs) {
    const totalPages = await fetchTotalPages(baseURL);
    console.log(`Total pages found for ${baseURL}: ${totalPages}`);

    for (let page = 1; page <= totalPages; page++) {
      console.log(`Fetching page ${page} for ${baseURL}${page}`);
      const html = await fetchQuotes(baseURL, page);

      if (html) {
        const dom = new JSDOM(html);
        const document = dom.window.document;

        document.querySelectorAll(".quoteDetails").forEach(async (element) => {
          const authorFromImage = element.querySelector(".quoteAvatar img")?.getAttribute("alt");
          if (authorFromImage) {
            let author = cleanAuthorName(authorFromImage.toLowerCase());

            if (authorsList.includes(author.toLowerCase())) {
              const quoteText = element.querySelector(".quoteText").textContent.trim();
              const quote = quoteText.split("―")[0].trim();
              const imgLink = element.querySelector(".quoteAvatar img").getAttribute("src");

              if (!quoteSet.has(quote)) {
                quoteSet.add(quote);
                await quoteRepository.createQuote({
                  quote,
                  author,
                  authorImg: imgLink,
                });
                console.log(`Inserted quote: "${quote}" by ${author}`);
              }
            }
          }
        });
      }
    }
  }
}

export default scrapeQuotes;