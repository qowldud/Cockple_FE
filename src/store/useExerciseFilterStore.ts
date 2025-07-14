import { create } from "zustand";

export type FilterKey = "region" | "level" | "style" | "time";

interface ExerciseFilterState {
  region: string[];
  level: string[];
  style: string;
  time: string;
  setFilter: (key: FilterKey, value: string[] | string) => void;
  resetFilter: () => void;
}

export const useExerciseFilterStore = create<ExerciseFilterState>(set => ({
  region: [],
  level: [],
  style: "",
  time: "",
  setFilter: (key, value) => set(state => ({ ...state, [key]: value })),
  resetFilter: () =>
    set(() => ({
      region: [],
      level: [],
      style: "",
      time: "",
    })),
}));
