import { RouteName, ROUTES } from "@constants/routes";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.DESTINATIONLIST]: undefined;
  [ROUTES.DESTINATION]: undefined;
  [ROUTES.VOICE_CHAT]: undefined;
  // 다른 라우트들...
};

export type NavigationProp = StackNavigationProp<RootStackParamList, RouteName>;
