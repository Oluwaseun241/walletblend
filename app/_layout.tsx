import { StatusBar, Platform } from "react-native";
import { useEffect, useState } from "react";
import { Slot, SplashScreen } from "expo-router";
import { loadFonts } from "@/lib/fonts";
import Colors from "@/constants/Colors";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [isReady, setReady] = useState<boolean>(false);

  // assets preloading
  const preloadAssets = async () => {
    try {
      await loadFonts();
    } catch (error) {
      console.warn("Error loading assests", error);
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

  return <Slot />;
}
