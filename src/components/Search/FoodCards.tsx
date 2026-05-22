import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const FoodCards = ({ image, itemName, backgroundColor = "#2d1a0e" }: any) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={[styles.image, !image && { backgroundColor }]}
      source={image}
    >
      <Text style={styles.text}>{itemName}</Text>
    </ImageBackground>
  );
};

export default FoodCards;

const styles = StyleSheet.create({
  image: {
    height: 150,
    justifyContent: "flex-end",
    padding: 12,
    overflow: "hidden",
    borderRadius: 16,
    margin: 6,
    flex: 1,
    backgroundColor:"red"
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});