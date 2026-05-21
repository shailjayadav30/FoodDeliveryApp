import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/home/CartScreen";
import RestaurantDetailsScreen from "../screens/home/RestaurantDetailsScreen";
import RestaurantHeader from "../components/RestaurantHeader";
import HomeHeader from "../components/HomeHeader";
import CartHeader from "../components/CartHeader";
type HomeStackParamList = {
  HomeMain: undefined;
  RestaurantDetail: {
    restaurantName: string;
    rating: number;
    deliveryTime: string;
  };
  Cart: undefined;
};
const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ header: () => <HomeHeader /> }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailsScreen}
        options={({ route, navigation }) => ({
          header: () => (
            <RestaurantHeader
              navigation={navigation}
              restaurantName={route.params?.restaurantName}
              rating={route.params?.rating}
              deliveryTime={route.params?.deliveryTime}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          header: () => (
            <CartHeader
              onBack={() => navigation.goBack()}
              avatarUri={undefined}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
