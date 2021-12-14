import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native-web";
export default function ActivityIndicator({ visible }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loading.json")}
    />
  );
}
