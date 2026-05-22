import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type RestaurantCardProps = {
  image: any; 
  rating: number;
  deliveryTime: string;
  deliveryFee?: string; 
  name: string;
  cuisine: string;
  onPress?: () => void;
  onAdd?: () => void;
};

export default function RestaurantCard({
  image,
  rating,
  deliveryTime,
  deliveryFee,
  name,
  cuisine,
  onPress,
  onAdd,
}: RestaurantCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.92}
      onPress={onPress}
    >

      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={11} color="#fff" />
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>

        
        <View style={styles.imagePills}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{deliveryTime}</Text>
          </View>
          {deliveryFee && (
            <View style={styles.pill}>
              <Text style={styles.pillText}>{deliveryFee}</Text>
            </View>
          )}
        </View>
      </View>

      
      <View style={styles.info}>
        <View style={styles.textBlock}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.cuisine}>{cuisine}</Text>
        </View>

        <TouchableOpacity style={styles.addBtn} onPress={onAdd}>
          <Ionicons name="add" size={20} color="#E8541A" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },

  imageWrapper: {
    position: "relative",
    height: 190,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#22C55E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 3,
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  imagePills: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    gap: 8,
  },
  pill: {
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  pillText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  textBlock: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 3,
  },
  cuisine: {
    fontSize: 13,
    color: "#9CA3AF",
  },

  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#E8541A",
    alignItems: "center",
    justifyContent: "center",
  },
});