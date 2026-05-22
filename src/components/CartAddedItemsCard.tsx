import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function CartAddedItemsCard({ item, onIncrease, onDecrease }:any) {
  return (
    <View style={styles.card}>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />


      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.customization} numberOfLines={1}>
          {item.customization}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>


      <View style={styles.qtyWrap}>
        <TouchableOpacity
          style={styles.qtyBtn}
          onPress={() => onDecrease && onDecrease(item.id)}
          activeOpacity={0.7}
        >
          <Ionicons name="remove" size={15} color="#1a1a1a" />
        </TouchableOpacity>

        <Text style={styles.qtyText}>{item.qty}</Text>

        <TouchableOpacity
          style={styles.qtyBtn}
          onPress={() => onIncrease && onIncrease(item.id)}
          activeOpacity={0.7}
        >
          <Ionicons name="add" size={15} color="#1a1a1a" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },


  image: {
    width: 76,
    height: 76,
    borderRadius: 14,
    backgroundColor: "#f0ede8",
  },


  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: -0.2,
    lineHeight: 20,
    marginBottom: 3,
  },
  customization: {
    fontSize: 12,
    color: "#999",
    marginBottom: 7,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#E8442A",
  },

  
  qtyWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 10,
  },
  qtyBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f2efea",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a1a",
    minWidth: 16,
    textAlign: "center",
  },
});