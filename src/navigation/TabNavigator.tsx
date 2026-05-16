import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeScreenNavigator";
import SearchScreen from "../screens/tabs/SearchScreen";
import OrdersScreen from "../screens/tabs/OrdersScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />

      <Tab.Screen name="Orders" component={OrdersScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
