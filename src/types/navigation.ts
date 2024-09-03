import { RouteName, ROUTES } from "@constants/routes";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.DESTINATIONLIST]: undefined;
  [ROUTES.DESTINATION]: { place: Object; onBack: () => void };
  [ROUTES.VOICE_CHAT]: undefined;
  [ROUTES.CAMERA]: { requestId: number };
  // 다른 라우트들...
};

export type NavigationProp = StackNavigationProp<RootStackParamList, RouteName>;
