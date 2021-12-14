import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../config/colors";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={"grey"} onPress={onPress}>
        <View style={styles.container}>
          {!image && IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text>{subTitle}</Text>}
          </View>
          {!image && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={"grey"}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
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
