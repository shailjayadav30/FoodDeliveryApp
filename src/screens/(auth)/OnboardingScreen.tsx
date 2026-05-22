import { StatusBar } from "expo-status-bar";

import { View, Text, Image, StyleSheet } from "react-native";

import CustomButton from "../../components/CustomBtn";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

   
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/deliveryImage.png")}
          style={styles.image}
          resizeMode="cover"
        />

       
        <View style={styles.deliveryCard}>
          <View style={styles.deliveryLeft}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>⏰</Text>
            </View>

            <View>
              <Text style={styles.deliveryTitle}>Average Delivery</Text>

              <Text style={styles.deliveryTime}>25-30 Minutes</Text>
            </View>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/40?img=1",
              }}
              style={styles.avatar}
            />

            <Image
              source={{
                uri: "https://i.pravatar.cc/40?img=2",
              }}
              style={[styles.avatar, { marginLeft: -10 }]}
            />

            <View style={styles.badge}>
              <Text style={styles.badgeText}>+1k</Text>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.content}>
      <Text style={styles.heading}>
  Fastest Food Delivery{"\n"}
  at Your <Text style={styles.orangeText}>Doorstep</Text>
</Text>

        <Text style={styles.description}>
          Discover the best cuisines from top-rated restaurants near you.
          Experience premium service at lightning speed.
        </Text>

      
        <View style={styles.pagination}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

     
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Get Started"
          onPress={() => console.log("Started")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3F0",
    paddingTop: 20,
  },

  imageContainer: {
    marginHorizontal: 24,
    borderRadius: 28,
    overflow: "hidden",
    elevation: 8,
  },

  image: {
    width: "100%",
    height: 340,
  },

  deliveryCard: {
    position: "absolute",
    bottom: 18,
    left: 18,
    right: 18,

    backgroundColor: "#F5F1EE",

    borderRadius: 18,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    padding: 14,
  },

  deliveryLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#16A34A",

    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    fontSize: 18,
  },

  deliveryTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
  },

  deliveryTime: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },

  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: "#fff",
  },

  badge: {
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: -8,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#6B7280",
  },

  content: {
    marginTop: 36,
    paddingHorizontal: 30,
    alignItems: "center",
  },

  heading: {
    fontSize: 38,
    lineHeight: 46,
    textAlign: "center",
    fontWeight: "800",
    color: "#1F2937",
  },

  orangeText: {
    color: "#C2410C",
  },

  description: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#6B7280",
  },

  pagination: {
    flexDirection: "row",
    marginTop: 24,
    gap: 8,
  },

  activeDot: {
    width: 28,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#C2410C",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
  },

  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 34,
  },
});
