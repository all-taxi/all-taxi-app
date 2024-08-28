import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "../../types/navigation";
import { ROUTES } from "../../constants/routes";

type Props = {
  navigation: NavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate(ROUTES.DETAIL)}
      />
    </View>
  );
};

export default HomeScreen;
