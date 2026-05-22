import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FoodCards from "../../components/Search/FoodCards";

const foodCardItems = [
  {
    id: 1,
    image: require("../../../assets/food2.png"),
    foodItem: "Burgers",
  },
  {
    id: 2,
    image: require("../../../assets/food2.png"),
    foodItem: "Sushi",
  },
  {
    id: 3,
    image: require("../../../assets/food2.png"),
    foodItem: "Italian",
  },
  {
    id: 4,
    image: require("../../../assets/food2.png"),
    foodItem: "Healthy",
  },
];

const recentSearches = ["Truffle Pizza", "Poke Bowls", "Smoothies"];

export default function SearchScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons size={20} color="#9CA3AF" name="search-outline" />
        <TextInput
          placeholderTextColor="#9CA3AF"
          style={styles.searchInput}
          placeholder="Cuisines, restaurants, or dishes"
        />
      </View>

      {/* Recent Searches */}
      <View style={styles.rowBetween}>
        <Text style={styles.sectionTitle}>Recent Searches</Text>
        <TouchableOpacity>
          <Text style={styles.clearAll}>Clear all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentSearchContainer}>
        {recentSearches.map((item) => (
          <View key={item} style={styles.recentSearch}>
            <Ionicons name="time-outline" size={16} color="#555" />
            <Text style={styles.recentText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Popular Categories */}
      <Text style={[styles.sectionTitle, { marginTop: 32 }]}>
        Popular Categories
      </Text>

      <FlatList
        data={foodCardItems}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
        style={styles.grid}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <FoodCards
            image={item.image}
            itemName={item.foodItem}
          />
        )}
      />

      {/* Based on your tastes */}
      <View style={[styles.rowBetween, { marginTop: 28 }]}>
        <Text style={styles.sectionTitle}>Based on your tastes</Text>
        <Ionicons name="arrow-forward" size={20} color="#555" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={[styles.tasteCard, { backgroundColor: "#e8671a" }]}>
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={11} color="#f9c23c" />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
          <Text style={styles.tasteTitle}>The Green Bowl</Text>
          <Text style={styles.tasteSub}>Healthy · 15–25 min</Text>
        </View>

        <View style={[styles.tasteCard, { backgroundColor: "#7a3210" }]}>
          <Text style={styles.tasteTitle}>Napoli Pizza</Text>
          <Text style={styles.tasteSub}>Italian · 20–30 min</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf9f7",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  searchBar: {
    backgroundColor: "#edeae5",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 10,
    borderRadius: 14,
    paddingVertical: 4,
    marginBottom: 28,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#1a1a1a",
  },
  clearAll: {
    fontSize: 14,
    color: "#D04A14",
    fontWeight: "500",
  },
  recentSearchContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 14,
  },
  recentSearch: {
    backgroundColor: "#edeae5",
    borderRadius: 40,
    paddingHorizontal: 14,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  recentText: {
    fontSize: 13,
    color: "#333",
  },
  grid: {
    marginTop: 14,
    marginHorizontal: -6,
  },
  columnWrapper: {
    gap: 0,
  },
  horizontalScroll: {
    marginTop: 14,
  },
  tasteCard: {
    width: 160,
    height: 160,
    borderRadius: 16,
    marginRight: 12,
    padding: 12,
    justifyContent: "flex-end",
    position: "relative",
  },
  ratingBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#2d2d2d",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "500",
  },
  tasteTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  tasteSub: {
    fontSize: 12,
    color: "rgba(255,255,255,0.75)",
    marginTop: 3,
  },
});