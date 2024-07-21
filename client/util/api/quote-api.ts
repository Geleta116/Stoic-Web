import { api, quotePath } from "./shared";

export interface todaysQuote {
  quote: string;
  author: string;
  authorImg: string;
}
 
export const fetchTodaysQuote = async (): Promise<todaysQuote> => {
  try {
    const response = await fetch(`${api}/${quotePath}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch quote");
    }

    return response.json() as Promise<todaysQuote>;
  } catch (error) {
    throw new Error((error as Error).message || "quote fetching failed");
  }
};
