import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import ListItem from "./ListItem";

export default function ListingItem() {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title}> Black Jacket for a Sale</Text>
        <Text style={{ color: "blue" }}>$100</Text>
      </View>
      <ListItem
        title="Mosh"
        subTitle="5 Listings"
        image={require("../assets/mosh.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  details: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  imageContainer: {},
});
