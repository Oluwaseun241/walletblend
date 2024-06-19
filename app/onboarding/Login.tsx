import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color={Colors.light.primary} />
        <Text style={{ fontFamily: "Lato-Bold" }}>Login</Text>
        <Text></Text>
      </View>
      <View style={{ padding: 14 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder="Enter your password"
        />
        <Text style={styles.text} onPress={() => console.log("heyy")}>
          Forgot password?
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={{ fontFamily: "Nunito-Sans" }}>Login</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: "Nunito-Sans" }}>
          Don't have an account? SignUp
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  input: {
    fontFamily: "Nunito-Sans",
    color: Colors.light.text,
    height: 55,
    width: "95%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#EDEFF3",
  },
  button: {
    backgroundColor: Colors.light.primary,
    borderRadius: 20,
  },
  text: {
    color: Colors.light.primary,
    padding: 7,
    fontFamily: "Nunito-Sans",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: 420,
  },
});
