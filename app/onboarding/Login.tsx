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
import UseNavigate from "@/lib/hooks/use-navigation";
import routes from "@/lib/routes";

export default function Login() {
  const { navigate } = UseNavigate();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color={Colors.light.primary} />
        <Text
          style={{ fontFamily: "Lato-Bold", fontSize: 18, fontWeight: "600" }}
        >
          Login
        </Text>
        <View style={{ flex: 0.1 }} />
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
        <Text
          style={styles.text}
          onPress={() => console.log("forgot password")}
        >
          Forgot password?
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate(routes.dashboard)}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: "Nunito-Sans", marginTop: 5 }}>
          Don't have an account?{" "}
          <Text
            onPress={() => navigate(routes.signup)}
            style={{ color: Colors.light.primary }}
          >
            Sign Up
          </Text>
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
    alignItems: "center",
    paddingLeft: 20,
  },
  input: {
    fontFamily: "Nunito-Sans",
    color: Colors.light.text,
    height: 55,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#EDEFF3",
  },
  button: {
    backgroundColor: Colors.light.primary,
    borderRadius: 20,
    height: 45,
    width: 300,
  },
  text: {
    color: Colors.light.primary,
    padding: 7,
    fontFamily: "Nunito-Sans",
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
