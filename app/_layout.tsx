import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { loadFonts } from "../lib/fonts";
import Colors from "../constants/Colors";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [isReady, setReady] = useState<boolean>(false);

  // assets preloading
  const preloadAssets = async () => {
    try {
      await loadFonts;
    } finally {
      setReady(true);
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    preloadAssets();
    Platform.OS === "android" &&
      StatusBar.setBackgroundColor(Colors.light.primary);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "NunitoSans" }}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
