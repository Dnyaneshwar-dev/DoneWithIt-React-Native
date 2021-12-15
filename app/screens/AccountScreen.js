import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "./Screen";
import colors from "../../config/colors";
import Icon from "../components/Icon";
import ListItemSepetator from "../components/lists/ListItemSeperator";
import AccountItem from "../components/lists/AccountItem";
import useAuth from "../auth/useAuth";

const menuItems = [
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
];

export default function AccountScreen({ navigation }) {
  const { logOut } = useAuth();
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AccountItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          description="5 listings"
        />
      </View>
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
      <View style={styles.container}>
        <AccountItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="grey" />}
          onPress={logOut}
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
