import AnimatedButton from "@/components/AnimatedButton";
import Header from "@/components/Header";
import slides from "@/constants/slides";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootLayout from "../_layout";

interface ItemProps {
  title: any;
  description: any;
  image: any;
}

interface OnboardingItemProps {
  item: ItemProps;
}

const OnboardingItem: React.FC<OnboardingItemProps> = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width }}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
      />
      <AnimatedButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    //fontFamily: "KaiseiOpti-Bold",
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    textAlign: "left",
    flexWrap: "wrap",
    width: "80%",
  },
  description: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "left",
    flexWrap: "wrap",
    width: "80%",
  },
});
