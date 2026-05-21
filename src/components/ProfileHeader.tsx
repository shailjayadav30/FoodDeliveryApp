import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.left}
      >
        <Ionicons name="menu-outline" size={30} color="#D04A14" />
        <Text style={styles.text}>Alex</Text>
      </Pressable>
      <Image
        style={styles.image}
        source={require("../../assets/profile.png")}
      />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 18,
    color: "#D04A14",
    fontWeight: "600",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 999,
  },
});
