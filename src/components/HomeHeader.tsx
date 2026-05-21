import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={14} color="#6B7280" />
          <Text style={styles.locationLabel}>Current Location</Text>
        </View>
        <Text style={styles.address}>123 Premium St</Text>
      </View>

      <TouchableOpacity style={styles.avatarWrapper}>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
    backgroundColor: "#fff",
  },
  left: {
    gap: 2,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "400",
  },
  address: {
    fontSize: 16,
    fontWeight: "700",
    color: "#E8541A",
    letterSpacing: -0.3,
  },
  avatarWrapper: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#F3F4F6",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
});