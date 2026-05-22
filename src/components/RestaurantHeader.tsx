import Ionicons  from "@expo/vector-icons/Ionicons"
import {View ,Text, StyleSheet, TouchableOpacity} from "react-native"

export default function RestaurantHeader({ navigation,restaurantName,rating,deliveryTime }: any){
    return (
        <View style={styles.navbar}>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
        <View style={styles.navCenter}>
          <Text style={styles.navTitle}>{restaurantName}</Text>
          <Text style={styles.navSub}>{rating} • Healthy • {deliveryTime} min</Text>
        </View>
        <View style={styles.navActions}>
          <TouchableOpacity style={styles.navBtn}>
            <Ionicons name="heart-outline" size={20} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Ionicons name="share-outline" size={20} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles=StyleSheet.create({
      navbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 24,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    gap: 8,
  },
  navBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  navCenter: {
    flex: 1,
    alignItems: "center",
  },
  navTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#E8541A",
  },
  navSub: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 1,
  },
  navActions: {
    flexDirection: "row",
    gap: 6,
  },
})