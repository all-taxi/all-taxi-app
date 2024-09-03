import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { calculateTaxiFare } from "@utils/calculateTaxiFare";
import WebMapView from "@components/Map/WebMapView";
import { theme } from "@styles/theme";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";
import { NavigationProp } from "@types/navigation";
import { ROUTES } from "@constants/routes";

type Props = {
  navigation: NavigationProp;
};

interface DestinationListItemProps {
  place: {
    id: string;
    place_name: string;
    category_name: string;
    category_group_code: string;
    category_group_name: string;
    phone: string;
    address_name: string;
    road_address_name: string;
    x: string;
    y: string;
    place_url: string;
    distance: string;
  };
  onBack: () => void;
}

const DestinationScreen: React.FC<DestinationListItemProps> = ({
  place,
  onBack,
}) => {
  const navigation = useNavigation<StackNavigationProp<Props>>();

  const distanceInMeters = Number(place.distance);
  const isNightTime = false; // 주간 시간대
  const result = calculateTaxiFare(distanceInMeters, isNightTime);

  const sendDestination = () => {
    navigation.navigate(ROUTES.CAMERA);
  };

  return (
    <View style={styles.container}>
      <AudioGuideHeader
        message={`${place.place_name}(으)로 가겠습니다.`}
        shouldSpeak={true}
      />

      <View style={styles.img}>
        <WebMapView x={place.x} y={place.y} />
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>
          <Ionicons
            name="location-sharp"
            size={23}
            color={theme.colors.text.secondary}
          />
          {place.address_name}
        </Text>
        <Text style={styles.title}>
          {place.place_name} {"\n"}
          소요 시간: {result.estimatedTime}분 {"\n"}
          예상 금액: {result.fare}원
        </Text>
      </View>

      <View style={styles.alter}>
        <TouchableWithoutFeedback onPress={sendDestination}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>여기로 출발</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={onBack}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>다른 장소로</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    position: "relative",
  },
  redoIcon: {
    marginTop: 50,
    position: "absolute",
    zIndex: 1,
    fontSize: 30,
    color: theme.colors.background,
    marginLeft: 10,
  },
  arrowIcon: {
    position: "absolute",
    bottom: -20,
    right: 10,
    backgroundColor: theme.colors.primary,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  img: {
    flex: 0.6,
  },
  info: {
    width: "100%",
    flex: 0.2,
    padding: 10,
  },
  infoText: {
    color: theme.colors.text.secondary,
    fontSize: 23,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: theme.fonts.notoSansKR.bold,
  },
  alter: {
    zIndex: 99,
    flex: 0.2,
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.colors.background,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  alterText: {
    padding: 10,
    fontSize: 25,
    fontFamily: theme.fonts.notoSansKR.thin,
    color: theme.colors.primary,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
    height: 80,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: 30,
    margin: "auto",
    borderRadius: 10,
    fontFamily: theme.fonts.notoSansKR.bold,
  },
});

export default DestinationScreen;
