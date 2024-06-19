import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import routes from "../lib/routes";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {}

const TabNavigators = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.home}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen name={routes.home} component={} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    //fontFamily: ,
    fontSize: 14,
    marginVertical: 3,
    color: "#b4b4b4",
  },
  tabBarStyle: {
    paddingVertical: 4,
  },
  tabBarLabelFocused: {
    // Custom styles for focused state
    color: "#8A50F0",
  },
});
