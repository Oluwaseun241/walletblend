import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Image
          source={require("@/assets/logo2.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text>WalletBlend</Text>
      </View>
      <TouchableOpacity>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
