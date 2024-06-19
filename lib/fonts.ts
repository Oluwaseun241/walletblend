import { loadAsync, useFonts } from "expo-font";

export const loadFonts = () =>
  useFonts({
    "KaiseiOpti-Bold": require("../assets/fonts/KaiseiOpti-Bold.ttf"),
    "KaiseiOpti-Medium": require("../assets/fonts/KaiseiOpti-Medium.ttf"),
    "KaiseiOpti-Regular": require("../assets/fonts/KaiseiOpti-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Marcellus-Regular": require("../assets/fonts/Marcellus-Regular.ttf"),
    "Nunito-Sans": require("../assets/fonts/NunitoSans.ttf"),
  });
