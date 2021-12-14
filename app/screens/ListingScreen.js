import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import Screen from "./Screen";
import Card from "../components/Card";
import colors from "../../config/colors";
import ListingsApi from "../apis/listings";
import AppButton from "../components/buttons/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red Jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Red Jacket for sale",
//     price: 200,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 3,
//     title: "Red Jacket for sale",
//     price: 200,
//     image: require("../assets/jacket-white.jpg"),
//   },
//   {
//     id: 4,
//     title: "Red Jacket for sale",
//     price: 200,
//     image: require("../assets/jacket.jpg"),
//   },
// ];

export default function ListingScreen({ navigation }) {
  const {
    data: listings,
    request: loadListings,
    loading,
    error,
  } = useApi(ListingsApi.getListings);
  useEffect(() => {
    loadListings();
  }, []);
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text style={{ alignItems: "center" }}>Couldn't Load Listings</Text>
          <AppButton title="Retry" color="secondary" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate("Details", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    marginVertical: 20,
    backgroundColor: colors.lightgrey,
  },
});
