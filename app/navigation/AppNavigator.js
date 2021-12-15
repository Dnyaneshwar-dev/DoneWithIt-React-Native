import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

import colors from "../../config/colors";
import NewListingScreen from "../screens/NewListingScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import expoPushTokens from "../apis/expoPushTokens";

const Tab = createBottomTabNavigator();

const TabNavgator = () => {
  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();

      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      const result = await expoPushTokens.register(token);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    registerForPushNotifications();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: colors.lightgrey,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="post-outline"
              size={25}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Create"
        component={NewListingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={25}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavgator;
