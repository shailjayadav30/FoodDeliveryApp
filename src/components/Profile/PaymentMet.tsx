
import {  StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


const PaymentMethodCard = () => {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="cash-outline" size={30} color={"#D04A14"} />
        </View>
        <Text style={styles.address}>Payment Methods</Text>
        <Text style={styles.location}>Apple pay ... 9012</Text>
      </View>
    );
}

export default PaymentMethodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical:20,
    gap:6,
      shadowColor: "#000",
    shadowOffset:{
      height:2,
      width:0
    },
    shadowOpacity:0.1,
    elevation: 5,
    shadowRadius:4
  },
  iconContainer: {
    backgroundColor: "#FFDBD0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 60,
    width: 60,
  },
  address: {
    fontWeight: "400",
    fontSize: 20,
    color: "#000",
  },
  location: {
    fontSize: 16,
    color: "#7B7672",
  },
});
