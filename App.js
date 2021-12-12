import React, { useEffect, useState } from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/screens/Screen";

import LoginScreen from "./app/screens/LoginScreen";
import NewListingScreen from "./app/screens/NewListingScreen";
import Messages from "./app/screens/Messages";

export default function App() {
  useEffect(() => {
    const requestPermission = async () => {
      const result = await ImagePicker.requestCameraPermissionsAsync();
      console.log(result.granted);
      if (!result.granted) {
        alert("You Need to Give Image Permission");
      }
    };
    requestPermission();
  }, []);

  return (
    <Screen>
      <NewListingScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
