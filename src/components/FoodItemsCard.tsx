import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FoodItemsCardProps = {
  image: any;
  title: string;
  desc: string;
  price: string;
  isVegan?: boolean;
  isBestSeller?: boolean;
  onAdd?: () => void;
};

const FoodItemsCard = ({
  image,
  title,
  desc,
  price,
  isVegan,
  isBestSeller,
  onAdd,
}: FoodItemsCardProps) => {
  return (
    <View style={styles.card}>

      <View style={styles.left}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Text style={styles.desc} numberOfLines={2}>
          {desc}
        </Text>
        {/* Tags */}
        <View style={styles.tags}>
          {isVegan && (
            <View style={styles.tagVegan}>
              <Text style={styles.tagVeganText}>VEGAN</Text>
            </View>
          )}
          {isBestSeller && (
            <View style={styles.tagBest}>
              <Text style={styles.tagBestText}>BEST SELLER</Text>
            </View>
          )}
        </View>
      </View>


      <View style={styles.right}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.addBtn} onPress={onAdd}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodItemsCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },


  left: {
    flex: 1,
    paddingRight: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    flex: 1,
    lineHeight: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#E8541A",
  },
  desc: {
    fontSize: 12,
    color: "#9CA3AF",
    lineHeight: 17,
    marginBottom: 8,
  },
  tags: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
  },
  tagVegan: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagVeganText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#16A34A",
  },
  tagBest: {
    backgroundColor: "#FEF9C3",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagBestText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#CA8A04",
  },

  
  right: {
    position: "relative",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },
  addBtn: {
    position: "absolute",
    bottom: -6,
    right: -6,
    backgroundColor: "#E8541A",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
});