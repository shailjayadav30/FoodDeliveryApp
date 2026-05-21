import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home/HomeScreen";
import TabNavigator from "./TabNavigator";
import AddressScreen from "../screens/(drawer)/AddressScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();
const Stack=createNativeStackNavigator()
const DrawerScreen = () => {
  return (

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator}/>

        <Drawer.Screen name="Profile" component={AddressScreen} />
      </Drawer.Navigator>
      

  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});
