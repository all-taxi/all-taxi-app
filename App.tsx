import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ROUTES } from "@constants/routes";
import { RootStackParamList } from "@types/navigation";
import HomeScreen from "@screens/Home/index";
import DetailScreen from "@screens/Detail/index";
import useFontsLoader from "@hooks/useFontsLoader";
import FontTest from "@components/test/FontTest";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [fontsLoaded] = useFontsLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTES.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
      <FontTest />
    </NavigationContainer>
  );
};

export default App;
