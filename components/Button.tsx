import Colors from "@/constants/Colors";
import UseNavigate from "@/lib/hooks/use-navigation";
import routes from "@/lib/routes";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LoginSignup() {
  const { navigate } = UseNavigate();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(routes.login)}
      >
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigate(routes.signup)}
      >
        <Text style={styles.buttonText2}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
