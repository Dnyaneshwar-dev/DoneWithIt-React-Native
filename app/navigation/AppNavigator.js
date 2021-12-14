import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import ListingScreen from "../screens/ListingScreen";
import NewListingScreen from "../screens/NewListingScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const TabNavgator = () => (
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
          <MaterialCommunityIcons name="post-outline" size={25} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Create"
      component={NewListingScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus-circle" size={25} color={color} />
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

export default TabNavgator;
