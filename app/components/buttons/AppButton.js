import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../../config/colors";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 15,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});
