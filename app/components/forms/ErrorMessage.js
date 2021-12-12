import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
