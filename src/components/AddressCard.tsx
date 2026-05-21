import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function AddressCard({ label = "Home", address="" }) {
  return (
    <View style={styles.card}>
      {/* Pin Icon */}
      <View style={styles.iconWrap}>
        <Ionicons name="location-outline" size={20} color="#E8442A" />
      </View>

      {/* Address Text */}
      <View style={styles.textWrap}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  // Soft red circle behind pin icon
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#fef0ee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    marginTop: 1,
  },

  textWrap: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 5,
    letterSpacing: -0.1,
  },
  address: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
  },
});