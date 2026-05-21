import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AddressScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Image style={styles.image} source={require("../../../assets/profile.png")} />
        <View style={styles.profile}>
          <Text style={styles.name}>Alex </Text>
          <Text style={styles.member}>Gold Member</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View>
          <Ionicons name="star-outline" />
          <Text>128 Points</Text>
        </View>
        <Ionicons name="chevron-forward-outline" color="#F3F0F2" size={20} />
      </View>
      <View style={styles.thirdContainer}>
        <View style={styles.btns}>
          <Ionicons name="heart-outline" size={20} />
          <Text style={styles.btnText}>Favorites</Text>
        </View>
        <View style={styles.btns}>
          <Ionicons name="cash-outline" size={20} />
          <Text style={styles.btnText}>Payments</Text>
        </View>

        <View style={styles.btns}>
          <Ionicons name="settings-outline" size={20} />
          <Text style={styles.btnText}>Settings</Text>
        </View>

        <View style={styles.btns}>
          <Ionicons name="help-circle-outline" size={20} />
          <Text style={styles.btnText}>Help</Text>
        </View>

        <View style={styles.btns}>
          <Ionicons name="log-out-outline" size={20} />
          <Text style={styles.btnText}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container:{
backgroundColor:"red"
  },
    firstContainer:{

    },secondContainer:{

    },
    thirdContainer:{

    },
});
