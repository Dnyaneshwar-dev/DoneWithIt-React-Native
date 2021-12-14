import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";

import colors from "../../../config/colors";

export default function AccountItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text>{subTitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 5,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
  },
  details: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
});
