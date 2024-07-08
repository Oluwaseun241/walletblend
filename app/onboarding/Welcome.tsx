import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import UseNavigate from "@/lib/hooks/use-navigation";
import routes from "@/lib/routes";

export default function Welcome() {
  const { navigate } = UseNavigate();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("@/assets/images/welcome.png")}
          resizeMode="center"
        />
        <Text style={styles.text}>Welcome to WalletBlend</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate(routes.dashboard)}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },

  button: {
    backgroundColor: Colors.light.primary,
    borderRadius: 20,
    height: 45,
    width: 300,
  },
  text: {
    fontFamily: "KaiseiOpti-Regular",
    fontWeight: "400",
    fontSize: 20,
  },
  textButton: {
    fontFamily: "Nunito-Sans",
    textAlign: "center",
    padding: 10,
    color: Colors.dark.text,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
