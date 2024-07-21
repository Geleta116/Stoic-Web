import { create } from "zustand";
import { fetchTodaysQuote, todaysQuote } from "@/util/api/quote-api";
import { error } from "console";
import { useErrorStore } from "./error-store";

interface QuoteStore {
  TodaysQuote: todaysQuote | null;
  fetchTodaysQuote: () => Promise<void>;
  quoteFetched: boolean;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  TodaysQuote: null,
  quoteFetched: false,
  fetchTodaysQuote: async () => {
    try {
      const todaysQuote: todaysQuote = await fetchTodaysQuote();
      set({
        TodaysQuote: todaysQuote,
        quoteFetched: true
      });
      useErrorStore.getState().setError(undefined); // Clear error on success
    } catch (error) {
      useErrorStore.getState().setError((error as Error).message);
      throw error;
    }
  },
}));
