import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import LottieView from "lottie-react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { removeItem } from "../components/AsyncStorage";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          source={require("../assets/images/confeti.json")}
          autoPlay
          loop
          style={styles.LottieView}
        />
      </View>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
