import { create } from "zustand";
import * as Location from "expo-location";

interface LocationState {
  location: Location.LocationObject | null;
  errorMsg: string | null;
  fetchLocation: () => Promise<void>;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: null,
  errorMsg: null,
  fetchLocation: async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        set({ errorMsg: "위치 권한을 허가해주세요." });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      set({ location, errorMsg: null });
    } catch (error) {
      set({ errorMsg: "현재 위치를 불러오는 과정에서 문제가 발생하였습니다." });
    }
  },
}));
