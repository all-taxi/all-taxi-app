import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationProp } from "@types/navigation";
import AudioGuideHeader from "@components/AudioGuideHeader/AudioGuideHeader";
import { theme } from "@styles/theme";
import TaxiMatchScreen from "@screens/TaxiMatch";
import { ROUTES } from "@constants/routes";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

type Props = {
  navigation: NavigationProp;
};

const CameraScreen = ({ navigation }: Props) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    if (permission?.status !== "granted") {
      requestPermission();
    }
  }, [permission]);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      setPhoto(photo.uri);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate(ROUTES.TAXIMATCH);
      }, 2000);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>카메라 권한을 허용해주세요</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.permissionButton}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AudioGuideHeader
        message="기사님이 찾기 쉽도록 상의를 촬영해 주세요"
        shouldSpeak={true}
      />

      <View style={styles.cameraContainer}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.preview} />
        ) : (
          <CameraView ref={cameraRef} style={styles.camera} facing="front">
            {/* 카메라 뷰 내용 */}
            <TouchableOpacity
              onPress={takePicture}
              style={styles.captureButton}
            >
              <View style={styles.captureInner} />
            </TouchableOpacity>
          </CameraView>
        )}
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              기사님께 의상착의 정보가 전달되었습니다
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    height: 200,
    width: "100%",
    paddingTop: 80,
    flex: 0.4,
    backgroundColor: theme.colors.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  permissionButton: {
    color: "blue",
    textAlign: "center",
  },
  preview: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  retakeButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 5,
  },
  retakeText: {
    color: "white",
    fontSize: 16,
  },
  overlay: {
    flex: 1,
  },
  upperOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centerRow: {
    flexDirection: "row",
    height: WINDOW_HEIGHT * 0.4,
  },
  sideOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centerFrame: {
    width: WINDOW_HEIGHT * 0.4,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  lowerOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: CAPTURE_SIZE,
    height: CAPTURE_SIZE,
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureInner: {
    width: CAPTURE_SIZE - 20,
    height: CAPTURE_SIZE - 20,
    borderRadius: Math.floor((CAPTURE_SIZE - 20) / 2),
    backgroundColor: "white",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
  },
});
