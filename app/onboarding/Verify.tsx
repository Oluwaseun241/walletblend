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

export default function Verify() {
  const { navigate } = UseNavigate();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={24}
          color={Colors.light.primary}
          onPress={() => navigate(routes.signup)}
        />
        <Text style={{ fontFamily: "Lato-Bold" }}>Verify Account</Text>
        <Text></Text>
        <Text></Text>
      </View>
      <Text style={{ fontFamily: "Nunito-Sans", textAlign: "center" }}>
        Input the 5 digit code sent to your Email
      </Text>
      <View style={{ padding: 14 }}></View>
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
    top: 580,
  },
});
