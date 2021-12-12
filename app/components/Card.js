import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "blue" }}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
});

{
  /* <Card
        title="Jacket For a Sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      /> */
}
