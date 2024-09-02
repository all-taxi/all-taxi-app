import { create } from "zustand";

interface DestinationState {
  destination: string | null;
  setDestination: (text: string) => void;
}

const useDestinationStore = create<DestinationState>((set) => ({
  destination: null,
  setDestination: (text: string) => set({ destination: text }),
}));

export default useDestinationStore;
