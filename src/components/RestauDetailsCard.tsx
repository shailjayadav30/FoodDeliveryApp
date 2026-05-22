import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RestauDetailsCard = ({restaurantName,rating,deliveryTime}:any) => {

  return (
    <View style={styles.card}>

      <View style={styles.titleRow}>
        <Text style={styles.title}>{restaurantName}</Text>
        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={13} color="#fff" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
      <Text style={styles.desc}>
        Fresh organic bowls, energizing smoothies & vegan treats.
      </Text>


      <View style={styles.divider} />

      
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Ionicons name="bicycle-outline" size={22} color="#E8541A" />
          <Text style={styles.statValue}>{deliveryTime}</Text>
          <Text style={styles.statLabel}>Delivery</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Ionicons name="cash-outline" size={22} color="#E8541A" />
          <Text style={styles.statValue}>$0.00</Text>
          <Text style={styles.statLabel}>Fee</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Ionicons name="location-outline" size={22} color="#E8541A" />
          <Text style={styles.statValue}>1.2 km</Text>
          <Text style={styles.statLabel}>Distance</Text>
        </View>
      </View>
    </View>
  );
};

export default RestauDetailsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -24,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#E8541A",
    letterSpacing: -0.5,
    lineHeight: 32,
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#22C55E",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
    marginTop: 4,
  },
  ratingText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  desc: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
    marginBottom: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F4F6",
    marginBottom: 18,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
  statLabel: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#F3F4F6",
  },
});