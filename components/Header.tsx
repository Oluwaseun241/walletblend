import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("@/assets/images/header.png")}
        style={styles.profileImage}
      />
      <Text style={styles.greetingText}>Hi, Dave Jones</Text>
      <View style={{ flexDirection: "row", marginLeft: 140, gap: 20 }}>
        <Ionicons name="scan-sharp" size={24} color="black" />
        <Ionicons name="notifications-sharp" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
  },
  profileImage: {
    width: 40, // Adjust size as needed
    height: 40,
    borderRadius: 20,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#3E3E3E", // Dark grey color
    marginLeft: 10,
  },
});
