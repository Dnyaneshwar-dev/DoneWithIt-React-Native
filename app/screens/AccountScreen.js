import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "./Screen";
import colors from "../../config/colors";
import Icon from "../components/Icon";
import ListItemSepetator from "../components/lists/ListItemSeperator";

const menuItems = [
  {
    title: "Mosh Hemadani",
    image: require("../assets/mosh.jpg"),
    subTitle: "dpw4112001@yahoo.com",
    icon: {
      name: "account",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
  {
    title: "Log Out",
    icon: {
      name: "logout",
      backgroundColor: "grey",
    },
    targetScreen: "Listings",
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              image={item.image}
              subTitle={item.subTitle}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSepetator}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    marginTop: 10,
    backgroundColor: colors.lightgrey,
  },
});
