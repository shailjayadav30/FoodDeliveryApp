import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Category = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const CATEGORIES: Category[] = [
  { id: "pizza", label: "Pizza", icon: "pizza-outline" },
  { id: "sushi", label: "Sushi", icon: "restaurant-outline" },
  { id: "burger", label: "Burgers", icon: "fast-food-outline" },
  { id: "dessert", label: "Dessert", icon: "ice-cream-outline" },
  { id: "coffee", label: "Coffee", icon: "cafe-outline" },
  { id: "salad", label: "Salads", icon: "leaf-outline" },
  { id: "noodles", label: "Noodles", icon: "nutrition-outline" },
];

export default function CategorySlider() {
  const [selected, setSelected] = useState("pizza");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
      style={styles.scroll}
    >
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat.id;
        return (
          <TouchableOpacity
            key={cat.id}
            style={[styles.item, isActive && styles.itemActive]}
            onPress={() => setSelected(cat.id)}
            activeOpacity={0.8}
          >
            <View style={[styles.iconBox, isActive && styles.iconBoxActive]}>
              <Ionicons
                name={cat.icon}
                size={24}
                color={isActive ? "#E8541A" : "#6B7280"}
              />
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {cat.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  item: {
    alignItems: "center",
    marginRight: 4,
    width: 68,
  },
  itemActive: {},
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  iconBoxActive: {
    backgroundColor: "#FEF0E8",
    borderWidth: 1.5,
    borderColor: "#FDBA99",
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  labelActive: {
    color: "#E8541A",
    fontWeight: "700",
  },
});