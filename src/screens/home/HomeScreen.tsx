import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CategorySlider from "../../components/CategorySlider";
import RestaurantCard from "../../components/RestaurantCard";

const POPULAR_RESTAURANTS = [
  {
    id: "1",
    image: require("../../../assets/food2.png"), 
    rating: 4.8,
    deliveryTime: "30-40 min",
    deliveryFee: "Free Delivery",
    name: "The Saffron Kitchen",
    cuisine: "Indian • Contemporary • $$",
  },
  {
    id: "2",
    image: require("../../../assets/food3.png"),
    rating: 4.5,
    deliveryTime: "15-25 min",
    name: "Bella Pizza Artisans",
    cuisine: "Italian • Wood-fired • $$",
  },
  {
    id: "3",
    image: require("../../../assets/food4.png"),
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.99 Fee",
    name: "Fresh Bowl & Co",
    cuisine: "Healthy • Bowls • $",
  },
];

export default function HomeScreen({ navigation }: any) {
  
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar hidden={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}  
      >
 
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search for food, restaurants..."
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
               <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={20} color="#374151" />
          </TouchableOpacity>
          </View>
       
        </View>

  
        <CategorySlider />

        <View style={styles.bannerWrapper}>
          <ImageBackground
            source={require("../../../assets/food1.png")} 
            style={styles.banner}
            imageStyle={styles.bannerImage}
            resizeMode="cover"
          >
         
            <View style={styles.bannerOverlay}>
              <View style={styles.limitedTag}>
                <Text style={styles.limitedText}>LIMITED OFFER</Text>
              </View>
              <Text style={styles.bannerTitle}>
                Get 40% OFF Gourmet Delights
              </Text>
              <Text style={styles.bannerSub}>Valid for the next 2 hours!</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Near You</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {POPULAR_RESTAURANTS.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              image={restaurant.image}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              deliveryFee={restaurant.deliveryFee}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              onPress={() => navigation.navigate("RestaurantDetail",{restaurantName:restaurant.name,
               rating:restaurant.rating,
               deliveryTime:restaurant.deliveryTime, 
              })}
              onAdd={() => console.log("Add", restaurant.name)}
            />
          ))}
        </View>

        <View style={styles.rewardsBanner}>
          <View>
            <Text style={styles.rewardsTitle}>Earn Rewards</Text>
            <Text style={styles.rewardsSubtitle}>
              Collect points on every order and get free meals.
            </Text>
            <TouchableOpacity style={styles.learnMoreRow}>
              <Text style={styles.learnMoreText}>Learn More</Text>
              <Ionicons name="arrow-forward" size={16} color="#E8541A" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickCard}>
            <Ionicons name="people-outline" size={28} color="#374151" />
            <Text style={styles.quickLabel}>Group Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard}>
            <Ionicons name="time-outline" size={28} color="#374151" />
            <Text style={styles.quickLabel}>Schedule</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
  filterBtn: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },


  bannerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  banner: {
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
  },
  bannerImage: {
    borderRadius: 20,
  },
  bannerOverlay: {
    flex: 1,
    backgroundColor: "rgba(20,10,0,0.52)",
    padding: 20,
    justifyContent: "center",
  },
  limitedTag: {
    backgroundColor: "#E8541A",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 8,
  },
  limitedText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 30,
    letterSpacing: -0.5,
  },
  bannerSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    marginTop: 6,
  },


  section: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -0.4,
  },
  viewAll: {
    fontSize: 14,
    color: "#E8541A",
    fontWeight: "600",
  },


  rewardsBanner: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  rewardsTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  rewardsSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 19,
    marginBottom: 12,
  },
  learnMoreRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  learnMoreText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#E8541A",
  },

  quickActions: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 12,
    marginVertical: 12,
  },
  quickCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  quickLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
});


