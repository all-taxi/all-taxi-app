import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ROUTES } from "@constants/routes";
import { RootStackParamList } from "@types/navigation";
import HomeScreen from "@screens/Home/index";
import DetailScreen from "@screens/Detail/index";
import useFontsLoader from "@hooks/useFontsLoader";
import SplashScreen from "@screens/Splash";
import { useLocationStore } from "@states/locationStore";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [fontsLoaded] = useFontsLoader();
  const [locationLoaded, setLocationLoaded] = useState(false);
  const fetchLocation = useLocationStore((state) => state.fetchLocation); // 현재 위치 저장 (테스트코드)

  useEffect(() => {
    const loadLocation = async () => {
      await fetchLocation();
      setLocationLoaded(true);
    };
    loadLocation();
  }, []);

  if (!fontsLoaded || !locationLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // 모든 화면에서 헤더를 숨김
        }}
      >
        <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTES.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
