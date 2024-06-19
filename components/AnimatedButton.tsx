import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

export default function AnimatedButton() {
  const size = 95;
  const strokeWidth = 4;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#FFFFFF"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={Colors.light.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={32} color={Colors.dark.tint} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  test: {
    backgroundColor: "#ffffff",
  },
  button: {
    position: "absolute",
    backgroundColor: Colors.light.primary,
    borderRadius: 100,
    padding: 20,
  },
});
