import React from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavgator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <TabNavgator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
