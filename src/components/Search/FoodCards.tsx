import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

const FoodCards = () => {
  return (
    <ImageBackground  source={require("../../../assets/food2")}>
  <Text>Burgers</Text>
    </ImageBackground>
  )
}

export default FoodCards

const styles = StyleSheet.create({
  
})