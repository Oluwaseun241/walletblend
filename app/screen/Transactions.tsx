import Header from "@/components/Header";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Transactions() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
