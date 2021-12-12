import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
export default function deleteItemAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="trash-can" size={35} color={"white"} />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 70,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
