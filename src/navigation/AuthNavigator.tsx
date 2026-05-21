import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/(auth)/LoginScreen";
import SignupScreen from "../screens/(auth)/SignupScreen";
import OnboardingScreen from "../screens/(auth)/OnboardingScreen";
import OnBoardingHeader from "../components/OnBoardingHeader";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <OnBoardingHeader onSkip={() => navigation.navigate("Login")} />
          ),
        })}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
