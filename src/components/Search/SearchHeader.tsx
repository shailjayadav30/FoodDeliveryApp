import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Ionicons name="location-outline" size={24} color="#832600"></Ionicons>
        <Text style={styles.text}>Current Location</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../../assets/profile.png")}
      />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#832600",
    fontSize: 16,
    fontWeight: 400,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 999,
  },
});
