import Colors from "@/constants/Colors";
import UseNavigate from "@/lib/hooks/use-navigation";
import routes from "@/lib/routes";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  const { navigate } = UseNavigate();
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Image
          source={require("@/assets/logo2.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text>WalletBlend</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigate(routes.dashboard)}
        style={styles.button}
      >
        <Text style={{ color: Colors.light.primary }}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  button: {
    backgroundColor: "#E8EDFD",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
  },
});
