import { create } from "zustand";
import { addEmail } from "@/util/api/email-api";
import { useErrorStore } from "./error-store";
interface EmailStore {
  addEmail: (email: string) => Promise<void>;
}

export const useEmailStore = create<EmailStore>((set) => ({
  addEmail: async (email: string) => {
    try {
      await addEmail(email);
      useErrorStore.getState().setError(undefined);
    } catch (error) {
      useErrorStore.getState().setError((error as Error).message);
      throw error;
    }
  },
}));
