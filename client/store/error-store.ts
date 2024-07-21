import { create } from "zustand";

interface ErrorStore {
  error: string | undefined;
  setError: (error: string | undefined) => void;
}

export const useErrorStore = create<ErrorStore>((set) => ({
  error: undefined,
  setError: (error) => set({ error }),
}));
