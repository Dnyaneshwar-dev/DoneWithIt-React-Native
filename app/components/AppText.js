import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText(props) {
  return <Text style={props.style}>{props.children}</Text>;
}

export default AppText;
