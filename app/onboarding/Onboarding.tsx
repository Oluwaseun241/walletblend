import AnimatedButton from "@/components/AnimatedButton";
import Header from "@/components/Header";
import slides from "@/constants/slides";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  useWindowDimensions,
  StatusBar,
  Animated,
  ViewToken,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingItemProps, ItemProps } from "@/@types/types";
import UseNavigate from "@/lib/hooks/use-navigation";
import routes from "@/lib/routes";
import LoginSignup from "@/components/LoginSignupButton";

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
  const { navigate } = UseNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<ItemProps>>(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const firstViewableItem = viewableItems[0]?.index;
      if (firstViewableItem !== null && firstViewableItem !== undefined) {
        setCurrentIndex(firstViewableItem);
      }
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigate(routes.dashboard);
    }
  };

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
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      {currentIndex === 2 ? (
        <LoginSignup />
      ) : (
        <AnimatedButton
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / slides.length)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight - 10 : 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "KaiseiOpti-Regular",
    fontSize: 30,
    marginBottom: 10,
    textAlign: "left",
    flexWrap: "wrap",
    width: "80%",
  },
  description: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: "#979797",
    textAlign: "left",
    flexWrap: "wrap",
    width: "80%",
  },
});
