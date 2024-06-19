import Colors from "@/constants/Colors";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LoginSignup() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 35,
  },
  button: {
    backgroundColor: Colors.dark.tint,
    padding: 12,
    width: 120,
    height: 48,
    borderRadius: 20,
  },
  button2: {
    backgroundColor: Colors.light.primary,
    padding: 12,
    width: 120,
    height: 48,
    borderRadius: 20,
  },
  buttonText1: {
    fontFamily: "Nunito-Sans",
    textAlign: "center",
    color: Colors.light.text,
    fontSize: 16,
  },
  buttonText2: {
    fontFamily: "Nunito-Sans",
    textAlign: "center",
    color: Colors.dark.text,
    fontSize: 16,
  },
});
