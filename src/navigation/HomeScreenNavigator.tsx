import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/home/CartScreen";
import RestaurantDetailsScreen from "../screens/home/RestaurantDetailsScreen";

const Stack = createNativeStackNavigator();
export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailsScreen}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
