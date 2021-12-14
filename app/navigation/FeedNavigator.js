import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetails from "../screens/ListingDetails";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Listing"
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={ListingDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
