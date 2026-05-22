import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SavedAddressCard from "../../components/Profile/SavedAddressCard";
import PaymentMethodCard from "../../components/Profile/PaymentMet";
import OrderHistoryCard from "../../components/Profile/OrderHistoryCard";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>PREMIUM MEMBER</Text>
          <Text style={styles.userName}>Good Morning, Alex</Text>
        </View>
        <View style={styles.addressCardContainer}>
          <SavedAddressCard />
        </View>
        <View style={styles.addressCardContainer}>
          <PaymentMethodCard />
        </View>
        <View style={styles.addressCardContainer}>
          <OrderHistoryCard />
        </View>
        <Text style={styles.accountText}>Account Settings</Text>
        <View style={styles.settingsContainer}>
          <View style={styles.innerSettingsContainer}>
            <Pressable  style={({pressed})=>[
              styles.setting1,{
                opacity:pressed?0.6:1
              }
            ]}>
              <View style={styles.left}>
                <Ionicons name="person-outline" size={24} color="#625E59" />
                <Text style={styles.textInner}>Personal Information</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#625E59"
              />
            </Pressable>
            <Pressable 
            style={({pressed})=>[
              styles.setting1,{
                opacity:pressed?0.6:1
              }]}>
              <View style={styles.left}>
                <Ionicons name="notifications-outline" size={24} color="#625E59" />
                <Text style={styles.textInner}>Notification Settings</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#625E59"
              />
            </Pressable>
            <Pressable style={({pressed})=>[
              styles.setting1,{
                opacity:pressed?0.6:1
              }]}>
              <View style={styles.left}>
                <Ionicons name="alert-circle-outline" size={24} color="#625E59" />
                <Text style={styles.textInner}>Account & Privacy</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#625E59"
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
  },
  text: {
    color: "#D04A14",
    fontWeight: "500",
  },
  userName: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 28,
  },
  addressCardContainer: {
    marginTop: 20,
  },
  settingsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#F3F0F2",
    borderRadius: 10,
    marginTop: 20,
  },
  innerSettingsContainer: {
    gap: 20,
  },
  setting1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountText: {
    fontSize: 16,
    textTransform: "uppercase",
    marginTop: 18,
    color: "#5F5E60",
  },
  textInner: {
    color: "#625E59",
    fontWeight: "500",
    fontSize: 14,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
