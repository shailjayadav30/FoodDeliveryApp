import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeScreenNavigator";
import SearchScreen from "../screens/(tabs)/SearchScreen";
import OrdersScreen from "../screens/(tabs)/OrdersScreen";
import ProfileScreen from "../screens/(tabs)/ProfileScreen";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ProfileHeader from "../components/ProfileHeader";
import SearchHeader from "../components/Search/SearchHeader";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
          if (routeName === "RestaurantDetail") return { display: "none" };
          return { display: "flex" };
        })(route),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              focused=""
            />
          ),
          tabBarActiveTintColor: "#E8541A",
          tabBarInactiveTintColor: "#9CA3AF",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: () => <SearchHeader />,
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={22} color="#E85414" />
          ),
          tabBarActiveTintColor: "#E8541A",
          tabBarInactiveTintColor: "#9CA3AF",
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          // header: () => <HomeHeader />,
          tabBarIcon: () => (
            <Ionicons name="receipt-outline" size={22} color="#E8541A" />
          ),
          tabBarActiveTintColor: "#E8541A",
          tabBarInactiveTintColor: "#9CA3AF",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <ProfileHeader />,
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={22} color="#E8541A" />
          ),
          tabBarActiveTintColor: "#E8541A",
          tabBarInactiveTintColor: "#9CA3AF",
        }}
      />
    </Tab.Navigator>
  );
}
