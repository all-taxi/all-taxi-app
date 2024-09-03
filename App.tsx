import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ROUTES } from "@constants/routes";
import { RootStackParamList } from "@types/navigation";
import HomeScreen from "@screens/Home/index";
import useFontsLoader from "@hooks/useFontsLoader";
import SplashScreen from "@screens/Splash";
import { useLocationStore } from "@states/locationStore";
import VoiceChatScreen from "@screens/VoiceChat/index";
import DestinationListScreen from "@screens/DestinationList";
import CameraScreen from "@screens/Camera";
import TaxiMatchScreen from "@screens/TaxiMatch";
import TaxiScreen from "@screens/Taxi";

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
        <Stack.Screen name={ROUTES.VOICE_CHAT} component={VoiceChatScreen} />
        <Stack.Screen
          name={ROUTES.DESTINATIONLIST}
          component={DestinationListScreen}
        />
        <Stack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
        <Stack.Screen name={ROUTES.TAXIMATCH} component={TaxiMatchScreen} />
        <Stack.Screen name={ROUTES.TAXI} component={TaxiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
