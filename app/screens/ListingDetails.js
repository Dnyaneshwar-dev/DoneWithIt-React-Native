import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import colors from "../../config/colors";
import AccountItem from "../components/lists/AccountItem";

export default function ListingDetails({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        source={{ uri: listing.images[0].url }}
        style={styles.image}
        tint={"light"}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
      </View>
      <View style={styles.userContainer}>
        <AccountItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          description="5 listings"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    padding: 15,
  },
  form: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 280,
  },
  price: {
    color: colors.secondary,
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 6,
  },
  userContainer: {},
});
