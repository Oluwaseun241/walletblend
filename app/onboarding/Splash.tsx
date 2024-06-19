import Colors from "@/constants/Colors";
import UseNavigate from "@/lib/hooks/use-navigation";
import routes from "@/lib/routes";
import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Splash() {
  const { navigate } = UseNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(routes.dashboard);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image source={require("@/assets/logo.png")} resizeMode="center" />
      </View>
      <Text style={styles.text}>WalletBlend</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.dark.text,
    textAlign: "center",
    marginBottom: 20,
  },
});
