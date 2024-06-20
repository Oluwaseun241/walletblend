import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "@/lib/routes";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
// Screen
import Splash from "@/app/onboarding/Splash";
import Home from "@/app/screen/Home";
import Transactions from "@/app/screen/Transactions";
import Wallet from "@/app/screen/Wallet";
import Statistics from "@/app/screen/Statistics";
import Settings from "@/app/screen/Settings";
import Onboarding from "@/app/onboarding/Onboarding";
import Login from "@/app/onboarding/Login";
import Signup from "@/app/onboarding/Signup";
import Verify from "@/app/onboarding/Verify";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={routes.splash}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.splash} component={Splash} />
      <Stack.Screen name={routes.onboarding} component={Onboarding} />
      <Stack.Screen name={routes.login} component={Login} />
      <Stack.Screen name={routes.signup} component={Signup} />
      <Stack.Screen name={routes.verify} component={Verify} />
      <Stack.Screen name={routes.dashboard} component={TabNavigators} />
    </Stack.Navigator>
  );
}

const TabNavigators = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.home}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={routes.home}
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={26}
              color={focused ? Colors.light.tabIconSelected : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.transactions}
        component={Transactions}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="time"
              size={26}
              color={focused ? Colors.light.tabIconSelected : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.wallet}
        component={Wallet}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="card"
              size={26}
              color={focused ? Colors.light.tabIconSelected : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.statistics}
        component={Statistics}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="pie-chart"
              size={26}
              color={focused ? Colors.light.tabIconSelected : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.settings}
        component={Settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={26}
              color={focused ? Colors.light.tabIconSelected : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
