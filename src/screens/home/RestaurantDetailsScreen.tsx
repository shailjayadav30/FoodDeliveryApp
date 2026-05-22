import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import RestauDetailsCard from "../../components/RestauDetailsCard";
import FoodItemsCard from "../../components/FoodItemsCard";
import MainBowls from "../../components/MainBowls";

const DRINKS = [
  {
    id: "1",
    name: "Green Glow",
    price: "$7.50",
    image: require("../../../assets/drink1.png"),
  },
  {
    id: "2",
    name: "Zest Spritz",
    price: "$6.00",
    image: require("../../../assets/drink2.png"),
  },
  {
    id: "3",
    name: "Oat Latte",
    price: "$5.50",
    image: require("../../../assets/drink3.png"),
  },
  {
    id: "4",
    name: "Green Glow",
    price: "$7.50",
    image: require("../../../assets/drink1.png"),
  },
  {
    id: "5",
    name: "Zest Spritz",
    price: "$6.00",
    image: require("../../../assets/drink2.png"),
  },
  {
    id: "6",
    name: "Oat Latte",
    price: "$5.50",
    image: require("../../../assets/drink3.png"),
  },
];

export default function RestaurantScreen({ navigation, route }: any) {
  const { restaurantName, rating, deliveryTime } = route.params;

  const [cartCount, setCartCount] = useState(2);
  const [cartTotal, setCartTotal] = useState(31.45);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar hidden={true} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Image
          source={require("../../../assets/restaurantBg.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <RestauDetailsCard
          restaurantName={restaurantName}
          deliveryTime={deliveryTime}
          rating={rating}
        />

        <View style={styles.menuContainer}>
          <Text style={styles.sectionTitle}>Fresh Starters</Text>

          <FoodItemsCard
            image={require("../../../assets/food1.png")}
            title="Avocado Citrus Toast"
            desc="Sourdough topped with smashed avocado, citrus zest, micro-green..."
            price="$12.50"
            isVegan
            isBestSeller
            onAdd={() =>console.log("Add avocado toast")}
          />
          <FoodItemsCard
            image={require("../../../assets/food2.png")}
            title="Truffle Miso Soup"
            desc="Warm miso broth with organic silken tofu, truffle essence, and toasted..."
            price="$9.00"
            onAdd={() => console.log("Add miso soup")}
          />

          {/* Main Bowls */}
          <Text style={styles.sectionTitle}>Main Bowls</Text>

          <MainBowls
            image={require("../../../assets/food3.png")}
            title="Zest Signature Quinoa"
            desc="Roasted seasonal vegetables, tri-color quinoa, lemon-tahini dressing, and toasted..."
            price="$18.95"
            tag="GLUTEN FREE"
            onAdd={() => console.log("Add quinoa")}
          />
          <MainBowls
            image={require("../../../assets/food4.png")}
            title="Wild Salmon Plate"
            desc="Sustainably sourced salmon, citrus glaze, steamed asparagus, and wild jasmine rice."
            price="$24.50"
            onAdd={() => console.log("Add salmon")}
          />

          {/* Artisan Drinks */}
          <View style={styles.drinksHeader}>
            <Text style={styles.sectionTitle}>Artisan Drinks</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.drinksScroll}
          >
            {DRINKS.map((drink) => (
              <TouchableOpacity key={drink.id} style={styles.drinkCard}>
                <Image
                  source={drink.image}
                  style={styles.drinkImage}
                  resizeMode="cover"
                />
                <Text style={styles.drinkName}>{drink.name}</Text>
                <Text style={styles.drinkPrice}>{drink.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        <View style={{ height: 100 }} />
      </ScrollView>


      <View style={styles.cartBar}>
        <View style={styles.cartLeft}>
          <View style={styles.cartBadge}>
            <Ionicons name="bag-outline" size={16} color="#fff" />
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{cartCount}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.cartItems}>{cartCount} items selected</Text>
            <Text style={styles.cartTotal}>${cartTotal.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewCartBtn}
          onPress={()=>navigation.navigate("Cart")}>
          <Text style={styles.viewCartText} >View Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },



  scroll: {
    flex: 1,
  },

  heroImage: {
    width: "100%",
    height: 240,
  },


  menuContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#F9FAFB",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -0.4,
    marginBottom: 14,
    marginTop: 8,
  },

  drinksHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 14,
  },
  viewAll: {
    fontSize: 14,
    color: "#E8541A",
    fontWeight: "600",
  },
  drinksScroll: {
    gap: 12,
    paddingRight: 4,
  },
  drinkCard: {
    width: 100,
    alignItems: "center",
    gap: 6,
  },
  drinkImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E5E7EB",
  },
  drinkName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
    textAlign: "center",
  },
  drinkPrice: {
    fontSize: 13,
    color: "#E8541A",
    fontWeight: "700",
    textAlign: "center",
  },

  cartBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1C1917",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 28,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  cartLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cartBadge: {
    position: "relative",
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#374151",
    alignItems: "center",
    justifyContent: "center",
  },
  cartCount: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#E8541A",
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cartCountText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "700",
  },
  cartItems: {
    fontSize: 13,
    color: "#9CA3AF",
  },
  cartTotal: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
  viewCartBtn: {
    backgroundColor: "#E8541A",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  viewCartText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
