import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";

const isAuthenticated = false;

export default function RootNavigator() {
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <TabNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}