import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ROUTES } from "@constants/routes";
import { RootStackParamList } from "@types/navigation";
import HomeScreen from "@screens/Home/index";
import DetailScreen from "@screens/Detail/index";
import useFontsLoader from "@hooks/useFontsLoader";
import SplashScreen from "@screens/Splash";
import TaxiMatchScreen from "@screens/TaxiMatch";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [fontsLoaded] = useFontsLoader();
  const [locationLoaded, setLocationLoaded] = useState(false);

  // 3초 후에 locationLoaded를 true로 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setLocationLoaded(true);
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
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
