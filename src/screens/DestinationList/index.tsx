import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@types/navigation";
import { ROUTES } from "@constants/routes";

type Props = {
  navigation: NavigationProp;
};

const DestinationListScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>DestinationList</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(ROUTES.HOME)}
      />
    </View>
  );
};

export default DestinationListScreen;
