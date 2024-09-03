import { create } from "zustand";

interface TaxiDriverData {
  car_number: string | null;
  driver_name: string | null;
  x: string | null;
  y: string | null;
  time: number | null;
}

interface TaxiDriverInfoState {
  data: TaxiDriverData;
  setTaxiDriverInfo: (info: Partial<TaxiDriverData>) => void;
}

const useTaxiDriverInfoStore = create<TaxiDriverInfoState>((set) => ({
  data: {
    car_number: null,
    driver_name: null,
    x: null,
    y: null,
    time: null,
  },
  setTaxiDriverInfo: (info) =>
    set((state) => ({
      data: { ...state.data, ...info },
    })),
}));

export default useTaxiDriverInfoStore;
